import axios from "axios";

const serverUrl = "http://localhost:3001";
export const registerCustomer = async (input) => {
    //{{host}}/api/users/register   
    try {
        const {data} = await axios.post(`${serverUrl}/api/users/register`, input);
        console.log(data);
        return data;
    }
    catch (error) {
        return {error: error.message};
    }
}

export const login = async (input) => {
    const {email, password} = input;
    try {
        //{{host}}/api/users/login
        const {data} = await axios.post(`${serverUrl}/api/users/login`, {email, password});
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        return true;
    }
    catch (error) {
        return false;
    }
}

export const getMe = async () => {
    try {
        const {data} = await axios.get(`${serverUrl}/api/users/me`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        return data;
    }
    catch (error) {
        return {error: error.message};
    }
}

export const logout = async () => {
    try {
        await axios.get(`${serverUrl}/api/users/logout`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }
    catch (error) {
        return {error: error.message};
    }
}