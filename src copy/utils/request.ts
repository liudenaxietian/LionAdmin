import axios from "axios"
import store from "@/store"
import { ElMessage } from "element-plus"
import { isCheckTimeout } from "./auth"

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            if (isCheckTimeout()) {
                store.dispatch("user/logout");
                return Promise.reject(new Error("token 失效"))
            }
            config.headers.Authorization = `Bearer${store.getters.token}`
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        const { success, message, data } = response.data
        if (success) {
            return data
        } else {
            ElMessage.error(message);
            return Promise.reject(new Error(message));
        }
    },
    error => {
        //处理token超时问题(需要服务端返回token失效错误码)
        if(error.response&&
            error.response.data&&
            error.response.data.code === 401
        ){
            //token超时,退出登录
            store.dispatch('user/logout');
        }
        ElMessage.error(error.message); //提示错误信息
        return Promise.reject(error);
    }

)

export default service;