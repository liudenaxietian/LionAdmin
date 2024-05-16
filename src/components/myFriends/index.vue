<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-26 17:40:19
 * @Description: 
-->
<template>
    <div class="space-container">
        <div class="top">
            <div class="left">
                <div class="focus" :class="{ ActiveColor: isActiveFocus }" @click="handleSwitchFocus">我的关注</div>
                <div class="fans" :class="{ ActiveColor: isActiveFans }" @click="handleSwitchFans">我的粉丝</div>
            </div>
            <div class="searchContent">
                <el-input v-model="searchName" size="large" placeholder="搜索你的好友" :suffix-icon="Search" />
                <el-button @click="handleQuery">查询</el-button>
            </div>
        </div>
        <div class="content">
            <div class="showFocus" v-if="isShowFocus">
                <Focus />
            </div>
            <div class="showFans" v-else-if="isShowFans">
                <Fans />
            </div>
            <div class="showSearch" v-else>
                <Searchs :id="2" :listInfo="fans_list" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Focus from "./focus/index.vue"
import Fans, { fansInfoData, fansInfoProps } from "./fans/index.vue"
import Searchs from "./card/index.vue"
import { searchMyFriend } from "@/api/module";
import { useUserStoreHooks } from '@/store/module/user';
import { storeToRefs } from 'pinia';

const searchName = ref("")
const userStore = useUserStoreHooks();
const { jobnum } = storeToRefs(userStore);

const isShowFocus = ref(true)
const isShowFans = ref(false)
const isActiveFocus = ref(true)
const isActiveFans = ref(false)

const fans_num = ref(0)
const fans_list = ref<fansInfoData[]>()

const handleSwitchFocus = () => {
    isShowFocus.value = true;
    isShowFans.value =false;
    isActiveFocus.value = true;
    isActiveFans.value = false;
}

const handleSwitchFans = () => {
    isShowFans.value = true;
    isShowFocus.value = false;
    isActiveFocus.value = false;
    isActiveFans.value = true;
}

const handleQuery = async() => {
    if (searchName.value == ""){
        return
    }
    isShowFocus.value = false;
    isShowFans.value = false;
    isActiveFocus.value = false;
    isActiveFans.value = false;

    const { data: { data: datas, code } }  = await searchMyFriend(jobnum.value,searchName.value)
    if (code == 1) {
        fans_num.value = (datas as fansInfoProps).list_num
        fans_list.value = (datas as fansInfoProps).list_data
    }
}



</script>

<style lang="scss" scoped>
.space-container {
    width: 100%;
    height: 100%;
    padding: 10px 60px;
    box-sizing: border-box;

    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
    border-radius: 6px;

    display: grid;
    grid-template-rows: 8% 92%;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E0E0E0;

        .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            .focus,
            .fans {
                padding-top: 20px;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 500;
                color: #1A1F2B;
                height: 100%;
                box-sizing: border-box;
            }

            .fans {
                margin-left: 30px;
            }

            .focus:hover,
            .fans:hover {
                cursor: pointer;
            }

            .ActiveColor {
                border-bottom: 5px solid #15A29D;
                border-radius: 3px;
            }
        }

        .searchContent {
            margin-right: 174px;

            :deep .el-input {
                width: 312px !important;
                background: #EFEFF4;
                border-radius: 6px;
                border: 1px solid #D5D5E6;
            }

            :deep .el-button {
                width: 120px;
                height: 42px;
                margin-left: 20px;
                background: #007571;
                border-radius: 6px;
                font-family: Microsoft YaHei;
                font-weight: 600;
                font-size: 18px;
                color: #FFFFFF;
                line-height: 30px;
            }
        }

    }

    .content {
        margin-top: 20px;

    }
}
</style>