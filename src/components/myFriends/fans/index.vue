<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-29 16:18:13
 * @Description: 
-->
<template>
    <div class="fans-container">
        <ShowCard :id="1" :listInfo="fans_list" @handleFansLoading="handleLoadingData" @handleFansChange="handleChanage" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import ShowCard from "../card/index.vue"
import { getMyFansList } from "@/api/module";
import { useUserStoreHooks } from "@/store/module/user";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

export interface fansInfoData {
    employeeId: string
    employeeName: string,
    avatar: string,
    fans_num: number,
    is_focus:number,
}

export interface fansInfoProps {
    id: number,
    list_num: number,
    list_data: fansInfoData[]
}

const userStore = useUserStoreHooks();
const { jobnum } = storeToRefs(userStore);


const fans_list = ref<fansInfoData[]>([])

const pageNum = ref(1)
const pageSize = ref(8)
const totalPage = ref(1)


const getData = async ()=>{
    const { data: { data: datas, code } } = await getMyFansList(jobnum.value,pageNum.value,pageSize.value)
    // console.log("getMyfansList:", datas, code, msg)
    if (code == 1) {
        // fans_num.value = (datas as fansInfoProps).list_num
        fans_list.value = (datas as fansInfoProps).list_data
    }else{
        ElMessage.error('获取粉丝列表失败')
    }
}

const handleLoadingData = async () => {
    if(pageNum.value > totalPage.value){
        return
    }
    const { data: { data: datas, code } } = await getMyFansList(jobnum.value, pageNum.value, pageSize.value)
    if (code == 1) {
        console.log("datas.list_data",datas.list_data)
        totalPage.value = datas.total
        fans_list.value!.push(...datas.list_data)
    } else {
        ElMessage.error('获取关注列表失败')
    }
    pageNum.value++;
}


const handleChanage = async ()=>{
    await getData();
}


onMounted(async () => {
    // await getData();
})

</script>

<style lang="scss" scoped>
.fans-container {
    width: 100%;
    height: 100%;

}
</style>