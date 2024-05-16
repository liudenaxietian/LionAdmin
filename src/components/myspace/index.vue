<template>
    <div class="space-container">
        <div class="upper">
            <!-- <div class="left">
                <div class="follow">关注: <span>{{ 0 }} </span></div>
                <div class="fans">粉丝:<span>{{ 0 }} </span> </div>
            </div>

            <div class="right">
                <div class="top">特别关注: <span>{{ 0 }}</span> </div>
                <div class="avatarList">
                    <div class="item" v-for="item in 5" :key="item">
                        <img :src=avatar alt="item">
                    </div>
                </div>
            </div> -->
        </div>

        <div class="lower">
            <div class="item">
                <img src="@/assets/city.png" alt="">
                <div class="content">姓名: {{ personInfo.city }}</div>
            </div>
            <div class="item">
                <img src="@/assets/onboard.png" alt="">
                <div class="content">入职日期: {{ personInfo.onBoardTime }}</div>
            </div>
            <div class="item">
                <img src="@/assets/sex.png" alt="">
                <div class="content">性别: {{ personInfo.sex }}</div>
            </div>
            <div class="item">
                <img src="@/assets/department.png" alt="">
                <div class="content"> 部门: {{ personInfo.department }}</div>
            </div>
            <div class="item">
                <img src="@/assets/sport.png" alt="">
                <div class="content">运动: {{ personInfo.sport }}</div>
            </div>
            <div class="item">
                <img src="@/assets/group.png" alt="">
                <div class="content">组别/项目: {{ personInfo.group }}</div>
            </div>
            <div class="item">
                <img src="@/assets/speciality.png" alt="">
                <div class="content">特长: {{ personInfo.speciality }}</div>
            </div>
            <div class="item">
                <img src="@/assets/phone.png" alt="">
                <div class="content">联系方式: {{ personInfo.phone }}</div>
            </div>
            <div class="item">
                <img src="@/assets/signature.png" alt="">
                <div class="content">个性签名: {{ personInfo.p_signature }}</div>
            </div>
            <div class="item">
                <img src="@/assets/email.png" alt="">
                <div class="content">邮箱: {{ personInfo.email }}</div>
            </div>
            <!-- <div class="item">
                <img src="@/assets/address.png" alt="">
                <div class="content">地址: {{ personInfo.address }}</div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { GetUserInfoFromPMOM } from "@/api/module";
import { OrgRetInfo } from "@/interface";
import { useUserStoreHooks } from "@/store/module/user";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue"

const userStore = useUserStoreHooks();

const { jobnum } = storeToRefs(userStore);

const personInfo = ref({
    city: "",
    onBoardTime: "",
    sex: "",
    department: "",
    sport: "",
    group: "",
    speciality: "",
    phone: "",
    p_signature: "",
    email: "",
    address: ""
})

onMounted(async () => {
    const res = await GetUserInfoFromPMOM(jobnum.value);
    const { data: { data: datas, code } } = res;
    if (code === 1) {
        personInfo.value.city = (datas as OrgRetInfo).empInfo[4].infoContent
        personInfo.value.onBoardTime = (datas as OrgRetInfo).empInfo[8].infoContent
        personInfo.value.department = (datas as OrgRetInfo).empInfo[3].infoContent
        personInfo.value.sex = (datas as OrgRetInfo).empInfo[7].infoContent
        // personInfo.value.sport = (datas as OrgRetInfo).empInfo[12].infoContent
        personInfo.value.group = (datas as OrgRetInfo).empInfo[12].infoContent
        // personInfo.value.speciality = (datas as OrgRetInfo).empInfo[12].infoContent
        personInfo.value.phone = (datas as OrgRetInfo).empInfo[10].infoContent
        // personInfo.value.p_signature = (datas as OrgRetInfo).empInfo[12].infoContent
        personInfo.value.email = (datas as OrgRetInfo).empInfo[6].infoContent
        personInfo.value.address = (datas as OrgRetInfo).empInfo[35].infoContent
    } else {
        ElMessage.error('获取信息失败...')
    }
})


</script>

<style lang="scss" scoped>
.space-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
    border-radius: 6px;
    // padding: 36px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
    align-items: center;
    justify-items: center;

    .upper {
        width: 90%;
        height: 100%;
        background-image: url("@/assets/space.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            margin-top: 100px;
            margin-left: 68px;
            display: flex;

            .follow,
            .fans {
                font-size: 30px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #2D3E4D;

                span {
                    font-weight: bold;
                }
            }

            .fans {
                margin-left: 10px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;

            .top {
                font-size: 30px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #2D3E4D;
            }

            .avatarList {
                width: 100%;
                display: flex;
                margin-top: 10px;
                margin-right: 200px;

                .item {
                    width: 64px;
                    height: 64px;
                    margin-left: 10px;
                    background: #000000;
                    border-radius: 50%;

                }

                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                }
            }
        }
    }

    .lower {
        width: 90%;
        height: 80%;
        align-self: start;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        column-gap: 220px;
        justify-items: start;
        align-items: center;

        .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .content {
                margin-left: 24px;
                font-size: 26px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #656D92;
            }
        }
    }

}
</style>