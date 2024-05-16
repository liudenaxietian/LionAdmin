<!--
 * @Author: Lion
 * @Date: 2024-02-21 15:14:36
 * @LastEditors: 
 * @LastEditTime: 2024-02-21 15:15:07
 * @Description: 
-->
<template>
    <div class="active-container">
        <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item">
                <img :src=item alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const imgList = ref([
    "/src/assets/test1.png",
    "/src/assets/test2.png",
    // "/src/assets/test3.png",
    // "/src/assets/test4.png",
])


</script>

<style lang="scss" scoped>
.active-container {
    width: 100%;
    height: 100%;

    :deep .el-carousel {
        width: 100%;
        height: 100%;

        .el-carousel__container {
            width: 100%;
            height: 100%;

            .el-carousel__item {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }

}
</style>