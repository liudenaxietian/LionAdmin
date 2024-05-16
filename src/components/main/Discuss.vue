<template>
    <div class="message-container">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/forum.png" alt="" />
                    <div class="title">话题讨论</div>
                </div>
                <div class="more" @click="handleMore">
                    <section>>></section>
                </div>
            </template>
            <div class="card-content">
                <section class="content" v-for="item in discussList">
                    <div class="top">
                        <div class="id">{{ item.id }}</div>
                        <div class="title">{{ item.title }}</div>
                        <!-- <img src="@/assets/avatar.jpg" alt=""> -->
                        <!-- <div class="username">
                            {{ item.username }}
                        </div> -->
                    </div>
                    <div class="bottom">
                        <div class="contents">{{ item.content }}</div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <span></span>
                </section>
            </div>
        </el-card>
    </div>
</template>


<script setup lang="ts">
import { ref } from "vue"

const discussList = ref([
    {
        "id": 1,
        "username": "张三",
        "avatar": "",
        "title": "懂王们进来给点建议",
        "content": "OBJ和MTL文件没有关联,打开以后...",
        "attach": "",
        "date": "2023-08-31"
    },
    {
        "id": 2,
        "username": "李四",
        "avatar": "",
        "title": "部门管理系统建议",
        "content": "对于部门管理系统大家有没有什么新的想法..",
        "attach": "",
        "date": "2023-12-01"
    }
])

const handleMore = () => {

}


</script>

<style lang="scss" scoped>
.message-container {
    width: 100%;
    height: 100%;

    .box-card {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0 !important;
        display: grid;
        grid-template-rows: 20% 80%;

        :deep .el-card__header {
            padding: 0px !important;
            margin: 0 10px;
            display: flex;
            justify-content: space-between;

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
            padding: 0px !important;

            .card-content {
                height: 100%;
                margin-top: 0px;
                display: grid;
                grid-template-rows: repeat(2, 1fr);

                .content {
                    width: 100%;
                    display: grid;
                    grid-template-rows: repeat(2, 1fr);

                    .top {
                        display: grid;
                        grid-template-columns: 10% 70% 5% 15%;
                        justify-items: center;
                        align-items: center;

                        .id {
                            width: 52px;
                            height: 28px;
                            background: #F7F7F7;
                            border: 1px solid #EBEBEB;
                            border-radius: 2px;
                            text-align: center;
                            line-height: 28px;
                        }

                        .title {
                            justify-self: start;
                            margin-left: 10px;
                            font-size: 18px;
                            font-family: Microsoft YaHei;
                            font-weight: 600;
                            color: #2D64B3;
                            line-height: 28px;
                        }

                        img {
                            width: 22px;
                            height: 22px;
                            border-radius: 50%;
                        }

                        .username {
                            width: 29px;
                            height: 14px;
                            font-size: 14px;
                            font-family: Microsoft YaHei;
                            font-weight: 600;
                            color: #999999;
                            line-height: 14px;
                        }
                    }

                    .bottom {
                        display: grid;
                        grid-template-columns: 70% 30%;
                        justify-items: start;
                        align-items: center;

                        .contents {
                            margin-left: 40px;
                            font-size: 18px;
                            font-family: Microsoft YaHei;
                            font-weight: 600;
                            color: #666666;
                            line-height: 28px;
                            overflow: hidden;
                            /*必须结合的属性,当内容溢出元素框时发生的事情*/
                            text-overflow: ellipsis;
                            /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
                            display: -webkit-box;
                            /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
                            -webkit-line-clamp: 1;                            /*用来限制在一个块元素显示的文本的行数。*/
                            -webkit-box-orient: vertical;
                            /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
                        }

                        .date {
                            justify-self: end;
                            margin-right: 20px;
                        }
                    }
                }

                .content:nth-child(2) {
                    border-top: 1px solid #ccc;

                    .top {
                        margin-top: 15px;
                    }
                }
            }
        }

    }

}
</style>