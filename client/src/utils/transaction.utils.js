import axios from "axios";

export const serverUrl = "http://localhost:3001";


export const getAllTransactions = async () => {
    //{{host}}/api/transactions/getAll
    try {
        const {data} = await axios.get(`${serverUrl}/api/transactions/getAll`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        return data;
    }
    catch (error) {
        return null;
    }
}

export const updateTransactionStatus = async (id, status) => {
    //{{host}}/api/transactions/updateStatus/639a85a99f90fe2d33e83121
    try {
        const {data} = await axios.post(`${serverUrl}/api/transactions/updateStatus/${id}`, {status}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        return data;
    }
    catch (error) {
        return false;
    }
}

export const getMyTransactions = async () => {
    try {
        // {{host}}/api/transactions/getMyTransactions
        const {data} = await axios.get(`${serverUrl}/api/transactions/getMyTransactions`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'x-refresh' : localStorage.getItem("refreshToken")
            }
        });
        return data;
    }
    catch(error) {
        return null;
    }
}