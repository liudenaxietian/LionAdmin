import { UploadFileProps } from "@/components/activity/index.vue"
import { LoginResult } from "@/interface/index"
import request from "@/utils/request"


//从SSOServer获取token
export const GetSSOToken = (code: string) => {
    return request({
        url: "/api/admin/getToken",
        method: "get",
        params: {
            code
        }
    })
}

//从SSOServer中获取用户信息
export const GetUserInfo = () => {
    return request({
        url: "/api/admin/getUserInfo",
        method: "get",
    })
}

//从组织架构中获取用户详细信息
export const GetUserInfoFromPMOM = (jobnum: string) => {
    return request({
        url: "/api/admin/getEmpInfo",
        method: "get",
        params: {
            jobnum
        }
    })
}

//登录
export const LogIn = (username: string): Promise<LoginResult> => {
    return request({
        url: "/api/admin/login",
        method: "post",
        data: {
            username
        }
    })
}


//退出登录
export const logout = () => {
    return request({
        url: "/api/admin/logout",
        method: "post",
    });
};



// 上传富文本内容新闻
export const uploadExpress = (username: string, title: string, contents: string) => {
    return request({
        url: '/api/admin/uploadExpress',
        method: "post",
        data: {
            username,
            title,
            contents,
        }
    })
}

//获取新闻公告信息
export const getExpress = (page: number, size: number) => {
    return request({
        url: "/api/admin/getExpressList",
        method: "get",
        params: {
            page,
            size
        }
    })
}

//获取新闻公告信息(根据id)
export const getExpressById = (id: number, title: string) => {
    return request({
        url: "/api/admin/getExpressById",
        method: "get",
        params: {
            id,
            title
        }
    })
}

//获取考勤统计数据
export const getWorkData = (jobnum: string) => {
    return request({
        url: "/api/admin/getWorkData",
        method: "get",
        params: {
            jobnum
        }
    })
}

//获取活动图片
export const getActivityPicList = () => {
    return request({
        url: "/api/admin/getActivityPic",
        method: "get",
    })
}

//确认上传活动图片
export const confirmUploadPic = (data: UploadFileProps) => {
    return request({
        url: "/api/admin/confirmUploadPic",
        method: "post",
        data
    })
}

//取消上传活动图片
export const cancelUploadPic = (data: UploadFileProps) => {
    return request({
        url: "/api/admin/cancelUploadPic",
        method: "post",
        data
    })
}

// 编辑修改用户信息
export const modifyUserInfo = (data: any) => {
    return request({
        url: "/api/admin/modifyUserInfo",
        method: "post",
        data
    })
}

//获取消息列表
// export const getMessageCount = ()=>{
//     return request({
//         url:"/api/admin/getMessageCount",
//         method:"get",
//     })
// }


//获取消息数据
export const getMessageCount = () => {
    return request({
        url: "/api/admin/getMessageCount",
        method: "get",
    })
}

//获取文档列表信息
export const getDocListInfo = () => {
    return request({
        url: "/doc/getHomeDoc",
        method: "get",
    })
}

//获取我的关注列表
export const searchMyFriend = (myjobnum: string, username: string) => {
    return request({
        url: "/api/admin/searchMyFriend",
        method: "get",
        params: {
            jobnum: myjobnum,
            username
        }
    })
}


//获取我的关注列表
export const getMyFocusList = (jobnum: string, pageNum: number, pageSize: number) => {
    return request({
        url: "/api/admin/getFoucusList",
        method: "post",
        params: {
            jobnum,
            pageNum,
            pageSize
        }
    })
}

//获取我的粉丝列表
export const getMyFansList = (jobnum: string, pageNum: number, pageSize: number) => {
    return request({
        url: "/api/admin/getFansList",
        method: "post",
        params: {
            jobnum,
            pageNum,
            pageSize
        }
    })
}

//更新关注或者粉丝列表信息
export const updateMyFansAndFocusList = (jobnum: string, username: string, currentJobnum: string, currentUsername: string, status: number) => {
    return request({
        url: "/api/admin/updateSocialList",
        method: "post",
        params: {
            jobnum,
            username,
            currentJobnum,
            currentUsername,
            status
        }
    })
}