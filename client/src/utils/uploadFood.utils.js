import axios from "axios";

export const serverUrl = "http://localhost:3001";

export const uploadFood = async (input) => {
    //{{host}}/api/uploadFoods/uploadFood
    try {
        const {data} = await axios.post(`${serverUrl}/api/uploadFoods/uploadFood`, input, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        console.log(data);
        return data;
    }
    catch (error) {
        return {error: error.message};
    }
}