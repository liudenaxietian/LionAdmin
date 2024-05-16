<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-26 11:47:09
 * @Description: 
-->
<template>
    <div class="userinfo-container">
        <!-- <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="我的关注" name="first">
                <Focus v-if="isShowFirst" />
            </el-tab-pane>
            <el-tab-pane label="我的粉丝" name="second">
                <Fans v-if="!isShowFirst"/>
            </el-tab-pane>
        </el-tabs> -->

        <div class="swich-btn">
            <div class="fcous">我的关注</div>
            <div class="fans">我的粉丝</div>
        </div>
        <div class="showContent">
            <div class="showFocus" v-if="isShowFocus"> 
                <Focus />
            </div>
            <div class="showFans">
                <Fans />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Focus from "./focus/index.vue"
import Fans from "./fans/index.vue"

const isShowFocus = ref(false)




</script>

<style lang="scss" scoped>
.userinfo-container {
    width: 100%;
    height: 100%;
    padding: 10px 60px;
    box-sizing: border-box;

    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
    border-radius: 6px;

    :deep .el-tabs {
        width: 100%;
        height: 100%;

        .el-tabs__header,
        .is-top {

            // background: #000 !important;
            .el-tabs__nav-wrap {
                .el-tabs__nav-scroll {
                    .el-tabs__nav {
                        .el-tabs__active-bar {
                            margin-top: 10px;
                            height: 5px !important;
                            width: 100px !important;
                            background: #15A29D;
                            border-radius: 3px;
                        }

                        .el-tabs__item,
                        .is-active {
                            margin-bottom: 10px;
                            font-size: 22px;
                            font-family: Microsoft YaHei;
                            font-weight: 500;
                            color: #1A1F2B;
                        }
                    }
                }
            }

        }

        .el-tabs__content {
            // height: 80%;
            padding: 30px 0px;

            .el-tab-pane {
                width: 100%;
                height: 100%;
            }
        }

    }
}
</style>