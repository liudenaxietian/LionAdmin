<template>
    <div class="message-container">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/express.png" alt="" />
                    <div class="title">消息提醒</div>
                </div>
            </template>
            <div class="card-content">
                <el-badge :value="pmMessageCnt == 0 ? '' : pmMessageCnt" class="item" @click="handleToPM()">
                    <img src="@/assets/pm1.png" alt="" />
                    <div class="title">我的工作</div>
                </el-badge>
                <el-badge :value="okrMessageCnt == 0 ? '' : okrMessageCnt" class="item">
                    <img src="@/assets/oec1.png" alt="" />
                    <div class="title">我的绩效</div>
                </el-badge>
                <el-badge :value="docMessageCnt == 0 ? '' : docMessageCnt" class="item">
                    <img src="@/assets/doc1.png" alt="" />
                    <div class="title">我的文档</div>
                </el-badge>
                <el-badge :value="wtMessageCnt == 0 ? '' : wtMessageCnt" class="item">
                    <img src="@/assets/checkin1.png" alt="" />
                    <div class="title">我的考勤</div>
                </el-badge>
                <el-badge :value="''" class="item">
                    <img src="@/assets/warnning1.png" alt="" />
                    <div class="title">我的预警</div>
                </el-badge>
                <el-badge :value="prMessageCnt == 0 ? '' : prMessageCnt" class="item">
                    <img src="@/assets/fm1.png" alt="" />
                    <div class="title">我的生产</div>
                </el-badge>
            </div>

        </el-card>
    </div>
</template>


<script setup lang="ts">
import { getMessageCount } from '@/api/module';
import { onMounted, ref } from 'vue';

const pmMessageCnt = ref(0)
const okrMessageCnt = ref(0)
// const kpiMessageCnt = ref(0)

const docMessageCnt = ref(0)
const wtMessageCnt = ref(0)
const prMessageCnt = ref(0)

//跳转至项目管理消息页面
const handleToPM = () => {
    window.open("http://172.31.12.242:8888/msg", "_blank")
}

onMounted(async () => {
    const res = await getMessageCount();
    const { data: { data: { count }, code } } = res;
    if (code === 1) {
        pmMessageCnt.value = count
    } else {
        console.log("getMessageCount error", res)
    }
})


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
        }

        :deep .el-card__body {
            padding: 0px !important;
            .card-content {
                height: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                justify-items: center;
                align-self: center;

                .item {
                    img {
                        width: 78px;
                        height: 78px;
                    }

                    .title {
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 600;
                        color: #666666;
                    }

                    .el-badge__content {
                        top: 15px;
                        right: 25px;
                    }
                }
            }
        }
    }
}
</style>