<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-27 09:06:18
 * @Description: 
-->
<template>
    <div class="focus-container">
        <ShowCard :id="2" :listInfo="focus_list" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import ShowCard from "../card/index.vue"

export interface FocusInfoData {
    employeeId: string
    employeeName: string,
    avatar: string,
    fans_num: number,
    is_focus:number,
}

export interface FocusInfoProps {
    id: number,
    list_num: number,
    list_data: FocusInfoData[]
}



const focus_list = ref<FocusInfoData[]>()


onMounted(async () => {
   
})

</script>

<style lang="scss" scoped>
.focus-container {
    width: 100%;
    height: 100%;

}
</style>