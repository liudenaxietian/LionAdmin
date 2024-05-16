/*
 * @Author: Lion
 * @Date: 2023-12-18 14:28:36
 * @LastEditors: 
 * @LastEditTime: 2024-03-28 16:27:32
 * @Description: 
 */
import { createRouter, createWebHistory } from "vue-router"

import Layout from '@/layout/index.vue'
import Main from '@/layout/components/AppMain.vue'
import MySpace from "@/components/myspace/index.vue"
import UserInfo from "@/components/userinfo/index.vue"
import MyCircle from "@/components/myFriends/index.vue"
import Express from "@/components/express/index.vue"
import Discuss from "@/components/discuss/index.vue"
import MyActive from "@/components/activity/index.vue"
import ShowExpress from "@/components/showExpress/index.vue"

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/main",
    children: [
      {
        path: '/main',
        name: 'Main',
        component: Main
      },
      {
        path: '/myspace',
        name: 'MySpace',
        component: MySpace
      },
      {
        path: '/userinfo',
        name: 'UserInfo',
        component: UserInfo
      },
      {
        path: '/mycircle',
        name: 'MyCircle',
        component: MyCircle
      },
      {
        path: '/express',
        name: 'Express',
        component: Express
      },
      {
        path: '/discuss',
        name: 'Discuss',
        component: Discuss
      },
      {
        path: '/active',
        name: 'Active',
        component: MyActive
      },
      {
        path: '/showExpress:id',
        name: 'ShowExpress',
        component: ShowExpress
      },
    ]
  },
  // {
  //     path: "/myspace",
  //     component: MySpace,
  // },
  // {
  //     path: "/userinfo",
  //     component: UserInfo,
  // },
  // {
  //     path: "/mycircle",
  //     component: MyCircle,
  // },
  // {
  //     path: "/express",
  //     component: Express,
  // },
  // {
  //     path: "/discuss",
  //     component: Discuss,
  // },
  // {
  //     path: "/checkIn",
  //     component: MyCheckIn,
  // }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;