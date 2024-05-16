<template>
    <div class="focus">
        <ul v-infinite-scroll="handleLoading"  infinite-scroll-distance="10"
            class="infinite-list" style="overflow: auto">
            <el-card class="box-card" v-for="item in props.listInfo">
                <div class="content">
                    <div class="title">
                        <el-icon class="icon">
                            <MoreFilled />
                        </el-icon>
                    </div>
                    <img :src="item.avatar" alt="">
                    <div class="username">{{ item.employeeName }}</div>
                    <div class="flag">{{ item.employeeName }}</div>
                </div>
                <template #footer>
                    <div class="fans">粉丝
                        <span>{{ item.fans_num }}</span>
                    </div>
                    <div class="status">
                        <div class="icon">
                            <el-icon v-if="item.is_focus">
                                <Flag />
                            </el-icon>
                            <el-icon v-else>
                                <Star />
                            </el-icon>
                        </div>
                        <div class="status" @click="handleAction(item)">
                            <span v-if="id == 0">
                                {{ "已关注" }}
                            </span>
                            <span v-else-if="id == 1">
                                {{ item.is_focus == 1 ? "相互关注" : "回粉" }}
                            </span>
                            <span v-else="">
                                {{ item.is_focus == 1 ? "已关注" : "关注" }}
                            </span>
                        </div>
                    </div>
                </template>
            </el-card>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useUserStoreHooks } from '@/store/module/user';
import { storeToRefs } from 'pinia';
import { updateMyFansAndFocusList } from '@/api/module';
import { onMounted, defineProps, defineEmits } from 'vue';
// import { FocusInfoData } from '../focus/index.vue';

const userStore = useUserStoreHooks();
const { jobnum, username } = storeToRefs(userStore);




interface FocusInfoData {
    employeeId: string
    employeeName: string,
    avatar: string,
    fans_num: number,
    is_focus: number,
}

const props = defineProps({
    id: {
        type: Number,
        default: 0,
    },
    listInfo: {
        type: Array<FocusInfoData>,
        default: [],
    }
})

const emit = defineEmits(['handleFocusChange', 'handleFansChange', "handleFocusLoading", "handleFansLoading"])

const handleLoading = () => {
    console.log("handleLoading")
    if (props.id == 0) {
        emit("handleFocusLoading")
    } else if (props.id == 1) {
        emit("handleFansLoading")
    }
}


const handleAction = async (item: FocusInfoData) => {
    for (let i = 0; i < props.listInfo.length; i++) {
        if (props.listInfo[i].employeeName == item.employeeName) {
            props.listInfo[i].is_focus = props.listInfo[i].is_focus == 1 ? 0 : 1
        }
    }
    const { data: { code } } = await updateMyFansAndFocusList(jobnum.value, username.value, item.employeeId, item.employeeName, item.is_focus)
    console.log("code", code)
    if (code == 1) {
        if (props.id == 0) {
            emit("handleFocusChange")
        } else if (props.id == 1) {
            emit("handleFansChange")
        }
    }
}


onMounted(() => {
    console.log("userInfo", props.id)
})

</script>

<style lang="scss" scoped>
.focus {
    height: 100%;
    width: 100%;

    .infinite-list {
        height: 700px;
        width: 100%;
        list-style: none;
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        // align-items: center;

        display: grid;
        grid-template-columns: repeat(4,1fr);

        .box-card {
            margin: 30px 40px;
            width: 290px;
            height: 320px;

            .--el-card-padding {
                padding: 0px;
            }

            :deep .el-card__body {
                padding: 20px;

                .content {
                    width: 100%;
                    height: 100%;

                    display: grid;
                    grid-template-rows: 10% 60% 15% 15%;
                    justify-items: center !important;
                    align-items: center !important;

                    .title {
                        justify-self: end;

                        .el-icon {
                            width: 40px;
                        }
                    }

                    img {
                        width: 116px;
                        height: 116px;
                        border: 2px solid #DCDCDC;
                        border-radius: 50%;
                    }

                    .username {
                        margin-top: 5px;
                        font-size: 20px;
                        font-family: Microsoft YaHei;
                        font-weight: 500;
                        color: #4A5A7F;
                    }

                    .flag {
                        margin-top: 5px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #B2B2B2;
                    }
                }
            }

            :deep .el-card__footer {
                padding: 10px 30px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #FAFAFC;
                border-radius: 0px 0px 10px 10px;

                .fans {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #939393;
                }

                .status {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    // width: 54px;
                    // height: 17px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #4A5A7F;

                    .icon {
                        margin-right: 10px;
                    }
                }

            }
        }
    }



    // .infinite-list {
    //     height: 800px;
    //     padding: 0;
    //     margin: 0;
    //     list-style: none;
    // }

    // .infinite-list .infinite-list-item {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     height: 50px;
    //     background: var(--el-color-primary-light-9);
    //     margin: 10px;
    //     color: var(--el-color-primary);
    // }

    // .infinite-list .infinite-list-item+.list-item {
    //     margin-top: 10px;
    // }
}
</style>