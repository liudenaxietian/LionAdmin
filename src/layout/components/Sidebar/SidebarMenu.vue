<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="$store.getters.cssVar.menBg"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
// import { filterRoutes } from '@/utils/route.ts'

// const router = useRouter()
// // console.log('232', router.getRoutes())
// const routes = computed(() => {
//   const filterRoutes = filterRouters(router.getRoutes())
//   return generateMenus(filterRouters)
// })

const routes = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: 'profile',
      icon: 'el-icon-user'
    }
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: 'roleList',
          icon: 'role'
        },
        children: []
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: 'permissionList',
          icon: 'permission'
        },
        children: []
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        },
        children: []
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        },
        children: []
      }
    ]
  }
]
// const routes = filterRoutes
// console.log(filterRoutes)
</script>

<style lang="scss" scoped></style>
