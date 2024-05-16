<!--
 * @Author: Lion
 * @Date: 2023-12-08 17:05:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-23 16:04:10
 * @Description: 
-->
<template>
    <div class="showexpress-container">
        <div class="upper">
            <div class="list-item" v-for="item in tableData">
                <div class="item" @click="handleClick(item)">
                    <div class="id"></div>
                    <div class="title">{{ item.title }}</div>
                    <div class="author">{{ item.editor }}</div>
                    <div class="date">{{ item.edit_time.split("T")[0] }}</div>
                    <div class="read_num">阅读{{ item.total_read_num }}</div>
                </div>
            </div>
        </div>

        <div class="btn">
            <el-button class="pre-btn" @click="handlePre">上一页</el-button>
            <el-button class="next-btn" @click="handleNext">下一页</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getExpress } from "@/api/module";
import { expressData } from "@/interface";
import { onMounted, ref } from "vue"


const currentPage = ref(1);
const currentSize = ref(8)

const tableData = ref<expressData[]>()

onMounted(async () => {
    // tableData.value = [
    //     {
    //         id: 1,
    //         title: "阿斯顿发斯蒂芬",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     },
    //     {
    //         id: 2,
    //         title: "大萨达是士大夫",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     },
    //     {
    //         id: 3,
    //         title: "撒打发斯蒂芬",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     }, {
    //         id: 4,
    //         title: "很反感换个房间",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     },
    //     {
    //         id: 5,
    //         title: "就喝两口酒",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     }, {
    //         id: 6,
    //         title: "和疾控黄金矿工好看",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     },
    //     {
    //         id: 7,
    //         title: "法规及反馈更好看",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     }, {
    //         id: 8,
    //         title: "好久开会刚看见",
    //         editor: "万丹丹",
    //         contents: "123123",
    //         edit_time: "2024-02-28 14:22:00",
    //         total_read_num: 123,
    //     }
    // ]
    const res = await getExpress(currentPage.value, currentSize.value)
    const { data: { data: datas, code } } = res;
    if (code == 1) {
        tableData.value = datas;
    } else {
        console.log("上岛咖啡哈萨克地方");
    }
})


const handleClick = (item: any) => {
    console.log("item:", item)
    var id = window.open("", "_blank");
    id!.document.body.innerHTML = item.contents;
}

const handlePre = () => {

}


const handleNext = () => {

}

</script>

<style lang="scss" scoped>
.showexpress-container {
    height: 100%;
    display: grid;
    grid-template-rows: 80% 20%;

    .upper {
        display: grid;
        grid-template-rows: repeat(8, 1fr);

        .list-item {
            .item {
                height: 100%;
                display: grid;
                grid-template-columns: 2% 58% 20% 10% 10%;
                justify-items: center;
                align-items: center;
                font-size: 1.2rem;
                color: #999999;
            }

            .id {
                width: 8px;
                height: 8px;
                background: #4A5A7F;
                border-radius: 50%;
            }

            .title {
                margin-left: 10px;
                justify-self: start;
                font-family: Microsoft YaHei;
                font-weight: bold;
                font-size: 1.2rem;
                color: #333333;

            }
        }

    }



    .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        .el-button {
            width: 100px;
            height: 42px;
            background: #007571;
            border-radius: 6px;

            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 30px;
        }

        .next-btn {
            margin-left: 80px;
        }
    }

}
</style>