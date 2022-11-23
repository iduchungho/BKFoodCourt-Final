import prisma from '../../utils/prisma';
import { UploadFoodInput } from './uploadFood.schema';
import { cloudinaryUtils } from '../../cloudinary/cloudinary';
export const uploadFoodService = async (food : UploadFoodInput, image : string) => {
    const newFood = await prisma.uploadFood.create({
        data : {
            title : food.title,
            description : food.description,
            price : food.price,
            category : food.category,
            rating : food.rating,
            imageUrl : image,
        }
    })
    return newFood;
}

export const getAllFoodsService = async () => {
    const foods = await prisma.uploadFood.findMany();
    return foods;
}

export const deleteUploadedFoodService = async (uploadFoodId : string) => {
    const food = await prisma.uploadFood.findUnique({
        where : {
            id : uploadFoodId
        }
    })
    if(!food) {
        return false;
    }
    await cloudinaryUtils.uploader.destroy(food.imageUrl);
    await prisma.uploadFood.delete({
        where : {
            id : uploadFoodId
        }
    })
    return food;
}