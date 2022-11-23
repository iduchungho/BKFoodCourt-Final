import {deleteUploadedFoodSchema, uploadFoodSchema } from './uploadFood.schema';
import express from 'express'
import { deleteUploadedFoodController, getUploadedFoodController, uploadFoodController } from './uploadFood.controller'
import multer from 'multer'
import { storage } from '../../cloudinary/cloudinary';
import { processRequestBody, processRequestParams } from 'zod-express-middleware'
import catchAsync from '../../utils/catchAsync';
import { requireEmployee } from '../../middlewares/requireUser';
const upload = multer({ storage })
const uploadFoodRouter = express.Router()

uploadFoodRouter.post('/uploadFood',requireEmployee,upload.single('image'),processRequestBody(uploadFoodSchema),catchAsync(uploadFoodController))
uploadFoodRouter.get('/',catchAsync(getUploadedFoodController))
uploadFoodRouter.delete('/:uploadFoodId',requireEmployee,processRequestParams(deleteUploadedFoodSchema),catchAsync(deleteUploadedFoodController))
export default uploadFoodRouter