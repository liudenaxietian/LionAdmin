import { RouteLocationNormalized } from "vue-router"
import router from "@/router"
import store from "@/store"

const whiteList = ["/login"]


router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (store.getters.token) {
        //如果存在token,直接进入主页
        if(to.path == "/login"){
            if(!store.getters.hasUserInfo){
                await store.dispatch("user/getUserInfo")
            }
            next("/")
        }else{
            next("/login")
        }
    } else {
        //不存在token,可以进入白名单
        // if (whiteList.indexOf(to.path) > -1) {
        //     next();
        // } else {
        //     next("/login")
        // }
        next();
    }
})