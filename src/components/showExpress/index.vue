<!--
 * @Author: Lion
 * @Date: 2023-12-18 17:21:00
 * @LastEditors: zouf zouf@192.168.49.250
 * @LastEditTime: 2024-04-30 08:53:16
 * @Descripti
-->
<template>
    <div class="showExpress-container">
        <div class="title">{{ expressContent!.title }}</div>
        <div class="info">
            <div class="editor"><span>作者:</span>{{ expressContent!.editor }}</div>
            <div class="edit_time"><span>时间:</span>{{ expressContent!.edit_time.split("T")[0] }}</div>
            <div class="total_read_num"><span>阅读量:</span>{{ expressContent!.total_read_num }}</div>
        </div>
        <div class="content">
            <div v-html="expressContent!.contents" class="showHTML"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getExpressById } from '@/api/module';
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

interface ExpressContentProps {
    id: number,
    title: string,
    editor: string,
    contents: string,
    edit_time: string,
    total_read_num: number,
}

// const router = useRouter();
const route = useRoute()

const expressContent = ref<ExpressContentProps>({
    id: 1,
    title: "",
    editor: "",
    contents: "",
    edit_time: "",
    total_read_num: 0,
})

const getData = async () => {
    const id = Number((route.params.id as string).split(":")[1])
    const title = (route.params.id as string).split(":")[2]
    const { data: { data: datas, code } } = await getExpressById(id,title)
    console.log("getExpressById res", datas)
    if (code == 1) {
        expressContent.value = datas[0] as ExpressContentProps
    } else {
        ElMessage.error('获取新闻信息失败')
    }
}

onMounted(async () => {
    console.log("showExpress:", route.params)
    await getData();
})


</script>

<style lang="scss" scoped>
.showExpress-container {
    width: 100%;
    // height: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
    border-radius: 6px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        margin-top: 40px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 24px;
        color: #333333;
    }
    .info{
        margin-top: 30px;
        display: flex;
        width: 60%;
        justify-content: space-around;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 16px;
        color: #333333;
        
        span{
            margin-right: 10px;
        }
    }

    .content {
        width: 60%;
        margin-top: 20px;
        background: #efefef;
        padding: 20px 160px;
    }


}
</style>