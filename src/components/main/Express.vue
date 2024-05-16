<!--
 * @Author: Lion
 * @Date: 2023-12-08 17:29:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-29 18:30:22
 * @Description: 
-->
<template>
    <div class="express-container">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/express.png" alt="">
                    <div class="title">新闻公告</div>
                </div>
                <div class="more" @click="handleMore">
                    <section>>></section>
                </div>
            </template>
            <div class="wrapper" v-for="item in ExpressContent">
                <div class="item" @click="handleView(item)">
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <div class="contents">
                        {{ filterContent(item.contents) }}
                    </div>

                    <div class="date">
                        {{ item.edit_time.split("T")[0] }}
                    </div>
                </div>

            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getExpress } from "@/api/module";
import { expressData } from "@/interface";
import { onMounted, ref } from "vue"

const page = ref(1);
const size = ref(3);

const router = useRouter();
const ExpressContent = ref<expressData[]>()

onMounted(async () => {
    const res = await getExpress(page.value, size.value)
    const { data: { data: datas, code } } = res;
    if (code == 1) {
        ExpressContent.value = datas;
    } else {
        console.log("getExpress error", res)
    }
})

const handleView = (item: any) => {
    // var id = window.open("", "_blank");
    // id!.document.body.innerHTML = item.contents;
    router.push(`/showExpress:${item.id}:${item.title}`)
    // const link = router.resolve(`/showExpress:${item.id}:${item.title}`)
    // console.log("link,",link)
    // window.open(link.href);
}

const handleMore = () => {
    router.push("/express")
}

const filterContent = (val: string) => {
    var re1 = new RegExp("<.+?>", "g");//匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
    var msg = val.replace(re1, '');//执行替换成空字符
    return msg.substr(0.50)
}

</script>

<style lang="scss" scoped>
.express-container {
    width: 100%;
    height: 100%;

    .box-card {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0 !important;
        display: grid;
        grid-template-rows: 15% 85%;

        :deep .el-card__header {
            display: flex;
            justify-content: space-between;
            padding: 0px !important;
            margin: 0 10px;

            .card-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                    margin-right: 10px;
                }

                .title {
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 600;
                    color: #4A5A7F;
                }
            }

            .more {
                align-self: center;
                font-family: Microsoft YaHei;
                font-weight: 400;
                font-size: 20px;
                color: #8992A6;
            }

            .more:hover {
                cursor: pointer;
            }
        }

        :deep .el-card__body {
            display: grid;
            grid-template-rows: repeat(2,1fr);
            
            .wrapper {
                padding-left: 10px;

                .item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                    .title {
                        font-family: Microsoft YaHei;
                        font-weight: bold;
                        font-size: 18px;
                        color: #333333;
                    }

                    .contents {
                        // margin-top: 5px;
                        font-size: 17px;
                        color: #666666;

                        overflow: hidden;
                        /*必须结合的属性,当内容溢出元素框时发生的事情*/
                        text-overflow: ellipsis;
                        /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
                        display: -webkit-box;
                        /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
                        -webkit-line-clamp: 2;
                        /*用来限制在一个块元素显示的文本的行数。*/
                        -webkit-box-orient: vertical;
                        /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
                    }

                    .date {
                        margin-top: 10px;
                        align-self: flex-end;
                    }
                }
            }
        }


    }



}
</style>