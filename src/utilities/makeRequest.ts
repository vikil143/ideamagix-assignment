import axios from "axios";
import { config } from "./config";

type METHOD = "POST" | "PUT" | "GET"

const makeRequest = async (endPoint: string, method: METHOD, formData: object) => {
    const headers = {};

    const instance = axios.create({
        baseURL: config.baseUrl,
        headers,
    })

    return await instance.request({
        method,
        url: endPoint,
        data: formData,
    })
};

export default makeRequest