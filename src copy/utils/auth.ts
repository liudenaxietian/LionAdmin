import { TIME_STAMP,TOKEN_TIMEOUT_VALUE } from "@/constant";
import { setItem,getItem } from "./storage";


//获取时间戳
export function getTimeStamp(){
    return getItem(TIME_STAMP);
}

//设置时间戳

export function setTimeStamp(){
    return getItem(TIME_STAMP);
}

//判断是否超时

export function isCheckTimeout(){
    const currentTime = Date.now();
    const timeStamp = getTimeStamp();
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}