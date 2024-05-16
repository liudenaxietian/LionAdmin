<template>
    <div class="message-container">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/express.png" alt="" />
                    <div class="title">我的考勤</div>
                </div>
            </template>
            <div class="card-content">
                <div class="top">
                    <div class="title">本年考勤情况</div>
                    <!-- <div class="title">2024年已休年假</div> -->
                    <div class="showinfo item1">
                        <div class="title1">累计净加班</div>
                        <div class="title2">累计调休</div>
                        <div class="overtime">{{ pureTime }}</div>
                        <div class="offtime">{{ leaveTime }}</div>
                    </div>
                    <!-- <div class="showinfo item2"> -->
                        <!-- <div class="title1"><span>已休:</span> {{ 0 }} </div> -->
                        <!-- <div class="title2"><span>剩余:</span> {{ 5 }} </div> -->
                    <!-- </div> -->
                </div>
            </div>
        </el-card>
    </div>
</template>
   

<script setup lang="ts">
import { getWorkData } from "@/api/module";
import { useUserStoreHooks } from "@/store/module/user";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue"

const userStore = useUserStoreHooks();
const { jobnum } = storeToRefs(userStore);

const pureTime = ref(0)
const leaveTime  =ref(0)

interface WorkTimeData {
    id:number,
    c_time:number,
    w_time:number,
    l_time:number,
    month:string
}


onMounted(async () => {
    const res = await getWorkData(jobnum.value)
    // console.log("getWorkData res:",res)
    const {data:{data:datas  ,code}} = res;
    if(code === 1){
        const rawData:WorkTimeData[] = datas;
        for(let i = 0;i<rawData.length;i++){
            pureTime.value += rawData[i].c_time + rawData[i].w_time -rawData[i].l_time
            leaveTime.value += rawData[i].l_time
        }
    }else{
        ElMessage.error('获取考勤信息失败...')
    }
})




</script>

<style lang="scss" scoped>
.message-container {
    width: 100%;
    height: 100%;

   :deep .box-card {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0!important;
        display: grid;
        grid-template-rows: 20% 80%;

        .el-card__header {
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

        .el-card__body {
            width: 100%;
            height: 100%;
            padding: 0;
            .card-content {
                width: 100%;
                height: 60%;
                display: grid;
                grid-template-rows: 100%;
                .top {
                    display: grid;
                    grid-template-rows: 45% 55%;
                    grid-template-columns: repeat(1, 1fr);
                    justify-items: center;
                    align-items: center;

                    .title {
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 600;
                        color: #333333;
                        line-height: 55px;
                    }

                    .showinfo {
                        width: 80%;
                        height: 100%;
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 600;
                        color: #666666;
                        background: #EEEEEE;
                        border-radius: 23px;
                    }
                    .item1 {
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        justify-items: center;
                        align-items: center;
                    }
                    .item2 {
                        display: grid;
                        grid-template-columns: repeat(1, 1fr);
                        justify-items: center;
                        align-items: center;
                    }
                }
                .chart {
                    .chartDom{
                        height: 80% !important;
                    }
                }
            }
        }

    }

}
</style>