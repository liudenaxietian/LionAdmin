import Cookies from "js-cookie"

const sso_token ="sso-token"

//获取token
export const getToken =()=>{
    return Cookies.get(sso_token)
}

//设置token
export const setToken= (token:string)=>{
    return Cookies.set(sso_token,token);
}

//移除token;
export const removeToken= ()=>{
    return Cookies.remove(sso_token);
}
