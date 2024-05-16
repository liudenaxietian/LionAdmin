<template>
    <div class="knowledge-container">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/file.png" alt="" />
                    <div class="title">知识文档</div>
                </div>
                <div class="more" @click="handleMore">
                    <section>>></section>
                </div>
            </template>
            <div class="card-content">
                <div class="content" v-for="item in docList.list" @click="handleToView(item)">
                    <div class="circle"></div>
                    <div class="item">{{ item.docName }}</div>
                    <div class="date">{{ item.docDate.split(" ")[0] }}</div>
                </div>
            </div>

        </el-card>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getDocListInfo } from '@/api/module';

const doc_base_url = "http://172.31.12.242:8898"


interface docInfo {
    id: number,
    docName: string,
    docDate: string,
    docUrl: string,
}

interface docListData {
    moreUrl: string,
    list: docInfo[],
}

const docList = ref<docListData>(
    {
        "moreUrl": "/doc_mgr/docStorage?t=0_68245",
        "list": [
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
            {
                docDate: "2023-12-07 17:19:23",
                docName: "ZG-SOP-012（MS）质谱仪工作站检验标准及操作规程A4.doc",
                docUrl: "/doc_mgr/docStorage?t=0_68245",
                id: 448909
            },
        ],
    },
)

const handleToView = (item: docInfo) => {
    window.open(doc_base_url + item.docUrl, "_blank")
}

const handleMore = () => {
    window.open(doc_base_url + docList.value.moreUrl, "_blank")
}

onMounted(async () => {
    const res = await getDocListInfo()

    const { data: { data: datas, code } } = res;
    if (code == 0) {
        docList.value = datas
    } else {
        console.log("getDocListInfo error", res)
    }
})


</script>

<style lang="scss" scoped>
.knowledge-container {
    width: 100%;
    height: 100%;

    .box-card {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 0!important;
        display: grid;
        grid-template-rows: 15% 85%;

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
                display: grid;
                grid-template-rows: repeat(6, 1fr);

                .content {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 10% 60% 30%;

                    .circle {
                        justify-self: center;
                        align-self: center;
                        width: 8px;
                        height: 8px;
                        background: #FFFFFF;
                        border: 3px solid #007571;
                        border-radius: 50%;
                    }

                    .item {
                        justify-self: start;
                        align-self: center;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;

                        overflow: hidden;
                        /*必须结合的属性,当内容溢出元素框时发生的事情*/
                        text-overflow: ellipsis;
                        /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
                        display: -webkit-box;
                        /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
                        -webkit-line-clamp: 1;
                        /*用来限制在一个块元素显示的文本的行数。*/
                        -webkit-box-orient: vertical;
                        /*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
                    }

                    .date {
                        justify-self: center;
                        align-self: center;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #A6A6A6;
                    }
                }
            }
        }

    }

}
</style>