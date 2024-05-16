/*
 * @Author: Lion
 * @Date: 2023-12-18 15:28:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-29 11:30:49
 * @Description: 
 */
/*
 * @Author: Lion
 * @Date: 2023-12-18 15:28:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-20 10:49:33
 * @Description: 
 */
import { defineStore } from "pinia"
import { userType } from "@/interface/index"
import { LogIn } from "@/api/index";
import { removeToken, setToken } from "@/utils/token";
import { store } from "@/store";


export const useUserStore = defineStore({
    id: "user",
    state: (): userType => ({
        username: "",
        jobnum: "",
        title: "",
        avatar: "",
        isAdmin: false,
    }),
    actions: {
        SET_USERNAME(username: string) {
            this.username = username;
        },
        SET_USERJOBNUM(jobnum: string) {
            this.jobnum = jobnum;
        },
        SET_USERAVATAR(avatar: string) {
            this.avatar = avatar;
        },
        SET_USERTITLE(title: string) {
            this.title = title;
        },
        SET_USERROLES(roles: boolean) {
            this.isAdmin = roles;
        },
        async loginByUserName(data: any) {
            const res = await LogIn(data);
            if (res.code == 0) {
                //返回token并设置Token
                setToken(res.data.token)
                return res.data
            } else {
                return
            }
        },
        logOut() {
            this.username = "";
            this.isAdmin = false;
            removeToken();
            //重置路由

            //返回登录界面
        },
    }
})

export function useUserStoreHooks() {
    return useUserStore(store);
}