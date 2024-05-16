<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:23:06
 * @LastEditors: zouf zouf@192.168.49.250
 * @LastEditTime: 2024-04-30 10:52:53
 * @Description: 
-->
<template>
  <div class="express-container">
    <el-tabs v-model="activeName" type="border-card" class="tabs-container" @tab-click="handleClick">
      <el-tab-pane label="新闻列表" name="first">
        <ShowExpress />
      </el-tab-pane>
      <el-tab-pane label="新闻编辑" name="second" v-if="isAdmin">
        <ShowEdit />
      </el-tab-pane>
      <el-tab-pane label="我的提交" name="third">
        <ShowAudit />
      </el-tab-pane>
      <el-tab-pane label="我的审批" name="fourth">
        <ShowPass />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { ref } from "vue";
import ShowExpress from "./showExpress.vue"
import ShowEdit from "./showEdit.vue"
// import ShowAudit from "./showAudit.vue"
// import ShowPass from "./showPass.vue"
import { useUserStoreHooks } from '@/store/module/user';

const userStore = useUserStoreHooks();

const { isAdmin } = userStore;


const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

</script>


<style lang="scss" scoped>
.express-container {
  width: 100%;
    height: 100%;
  padding: 42px 48px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: none;
  box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
  border-radius: 6px;

  :deep .tabs-container {
    width: 100%;
    height: 100%;
    border: none;

    .el-tabs__header {
      height: 52px;
      border-bottom: 1px solid #15A29D;
    }

    .el-tabs__header,
    .is-top {
      .el-tabs__nav-wrap {
        .el-tabs__nav-scroll {
          .el-tabs__nav {

            .el-tabs__item {
              height: 54px;
              font-size: 22px;
              font-family: Microsoft YaHei;
              font-weight: 500;
              color: #333333;
            }

            .is-active {
              color: #ffffff;
              border-radius: 6px 6px 0px 0px;
              background: #15A29D;
            }
          }
        }
      }
    }

    .el-tabs__content {
      height: 100%;
      box-sizing: border-box;

      .el-tab-pane {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

