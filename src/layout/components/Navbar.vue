<template>
  <div class="navbar">
    <div class="left-menu">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar :size="70" :src="avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLogout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const avatar = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)

const handleLogout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" coped>
.navbar {
  height: 80px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .left-menu {
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 60px;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 66px;

    .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          border: 2px solid rgba(0, 117, 113, 1);
          --el-avatar-bg-color: none !important;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
