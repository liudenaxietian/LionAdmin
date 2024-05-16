<!--
 * @Author: Lion
 * @Date: 2023-12-08 17:05:36
 * @LastEditors: zouf zouf@192.168.49.250
 * @LastEditTime: 2024-04-29 15:28:25
 * @Description: 
-->
<template>
    <div class="active-container">
        <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item">
                <img  :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getActivityPicList } from '@/api/module';
import test1 from '@/assets/test1.jpg'
import test2 from '@/assets/test2.jpg'

const imgList = ref([
    test1,
    test2
])


onMounted(async ()=>{
    await getActivityPicList()
    // const { data: { data: datas, code } } = res;
    // if (code === 1) {
    //     // ElMessage({
    //     //     message: '修改个人信息成功',
    //     //     type: 'success',
    //     // })
    // } else {
    //     // ElMessage.error('修改个人信息失败,请重新提交')
    // }

})


</script>

<style lang="scss" scoped>
.active-container {
    width: 100%;
    height: 100%;

    :deep .el-carousel {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        .el-carousel__container {
            width: 100%;
            height: 100%;

            .el-carousel__item {
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                }
            }
        }

    }

}
</style>