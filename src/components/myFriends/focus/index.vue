<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-29 15:49:40
 * @Description: 
-->
<template>
    <div class="focus-container">
        <ShowCard :id="0" :listInfo="focus_list" @handleFocusLoading="handleLoadingData"
            @handleFocusChange="handleChanage" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import ShowCard from "../card/index.vue"
import { getMyFocusList } from "@/api/module";
import { useUserStoreHooks } from "@/store/module/user";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

export interface FocusInfoData {
    employeeId: string
    employeeName: string,
    avatar: string,
    fans_num: number,
    is_focus: number,
}

export interface FocusInfoProps {
    id: number,
    list_num: number,
    list_data: FocusInfoData[]
}

const userStore = useUserStoreHooks();
const { jobnum } = storeToRefs(userStore);


// const focus_num = ref(0)
const focus_list = ref<FocusInfoData[]>([])

const pageNum = ref(1)
const pageSize = ref(8)
const totalPage = ref(1)


const getData = async () => {
    const { data: { data: datas, code, msg } } = await getMyFocusList(jobnum.value, pageNum.value, pageSize.value)
    console.log("getMyFocusList:", datas, code, msg)
    if (code == 1) {
        // focus_num.value = (datas as FocusInfoProps).list_num
        focus_list.value = (datas as FocusInfoProps).list_data
    } else {
        ElMessage.error('获取关注列表失败')
    }
}

//
const handleLoadingData = async () => {
    if(pageNum.value > totalPage.value){
        return
    }
    const { data: { data: datas, code } } = await getMyFocusList(jobnum.value, pageNum.value, pageSize.value)
    if (code == 1) {
        // focus_num.value = (datas as FocusInfoProps).list_num
        console.log("datas.list_data",datas.list_data)
        totalPage.value = datas.total
        focus_list.value!.push(...datas.list_data)
    } else {
        ElMessage.error('获取关注列表失败')
    }
    pageNum.value++;
}


const handleChanage = async () => {
    await getData();
}


onMounted(async () => {
    // await getData();
})


onMounted(async () => {
    // console.log("focus onMounted")
    // const { data: { data: datas, code, msg } } = await getMyFocusList(jobnum.value, pageNum.value, pageSize.value)
    // console.log("getMyFocusList:", datas, code, msg)
    // if (code == 1) {
    //     // focus_num.value = (datas as FocusInfoProps).list_num
    //     focus_list.value = (datas as FocusInfoProps).list_data
    // }
})

</script>

<style lang="scss" scoped>
.focus-container {
    width: 100%;
    height: 100%;

}
</style>