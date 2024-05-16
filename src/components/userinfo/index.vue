<template>
    <div class="userinfo-container">
        <div class="wrapper">
            <div class="left">
                <div class="upper">
                    <img src="@/assets/userinfobg.png" alt="">
                    <div class="content-degree">
                        <img src="@/assets/useinfo-degree.png" alt="">
                    </div>
                </div>
                <div class="lower">
                    <div class="left-info">
                        <div class="content content1">
                            <div class="title">
                                基本信息
                            </div>
                            <div class="baseinfo">
                                <div class="item">
                                    籍贯:<span>{{ userInfoData.native_place }}</span>
                                </div>
                                <div class="item">
                                    运动:<span>{{ userInfoData.sport }}</span>
                                </div>
                                <div class="item">
                                    性别:<span>{{ userInfoData.sex }}</span>
                                </div>
                                <div class="item">
                                    特长:<span>{{ userInfoData.speciality }}</span>
                                </div>
                                <div class="item">
                                    民族:<span>{{ userInfoData.nation }}</span>
                                </div>
                                <div class="item">
                                    电话:<span>{{ userInfoData.phone }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content content2">
                            <div class="title">
                                个人名片
                            </div>
                            <div class="person_info">
                                <div class="item">
                                    毕业院校:<span>{{ userInfoData.graduate_school }}</span>
                                </div>
                                <div class="item">
                                    参加工作时间:<span>{{ userInfoData.particaipate_job_time }}</span>
                                </div>
                                <div class="item">
                                    学历:<span>{{ userInfoData.edu_bacakground }}</span>
                                </div>
                                <div class="item">
                                    邮箱:<span>{{ userInfoData.email }}</span>
                                </div>
                                <div class="item">
                                    专业:<span>{{ userInfoData.major }}</span>
                                </div>
                                <!-- <div class="item">
                                    身份证号:<span>{{ userInfoData.identity_card }}</span>
                                </div> -->
                                <div class="item">
                                    毕业时间:<span>{{ userInfoData.graduate_time }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-info">
                        <div class="title">
                            入职信息
                        </div>
                        <div class="job_info">
                            <div class="item">
                                所属公司:<span>{{ userInfoData.company }}</span>
                            </div>
                            <div class="item">
                                部门:<span>{{ userInfoData.department }}</span>
                            </div>
                            <div class="item">
                                组别/项目:<span>{{ userInfoData.group }}</span>
                            </div>
                            <div class="item">
                                岗位:<span>{{ userInfoData.station }}</span>
                            </div>
                            <div class="item">
                                司龄:<span>{{ userInfoData.service_time }}</span>
                            </div>
                            <div class="item">
                                是否研发人员:<span>{{ userInfoData.is_rd }}</span>
                            </div>
                            <div class="item">
                                公司任职级别:<span>{{ userInfoData.office_title }}</span>
                            </div>
                            <div class="item">
                                社会职称:<span>{{ userInfoData.social_title }}</span>
                            </div>
                            <div class="item">
                                评审专家级别:<span>{{ userInfoData.evaluation_expert_title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="top">
                    <img :src=avatar alt="">
                    <div class="job_info">
                        <div class="item">
                            姓名:<span>{{ userInfoData.username }}</span>
                        </div>
                        <div class="item">
                            工号:<span>{{ userInfoData.jobnum }}</span>
                        </div>
                        <div class="item">
                            入职时间:<span>{{ userInfoData.onboard_time }}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="item">
                        紧急联系人:<span>{{ userInfoData.emergency_person }}</span>
                    </div>
                    <div class="item">
                        关系:<span>{{ userInfoData.relationship }}</span>
                    </div>
                    <div class="item">
                        紧急联系人电话:<span>{{ userInfoData.emergency_phone }}</span>
                    </div>
                    <div class="item">
                        地址:<span>{{ userInfoData.address }}</span>
                    </div>
                    <div class="item">
                        个性签名:<span>{{ userInfoData.p_signature }}</span>
                    </div>
                    <el-button type="primary" @click="handleEdit">编辑</el-button>
                </div>

            </div>
        </div>
        <el-dialog v-model="dialogVisible" title="编辑" width="1400" top="5vh" :before-close="handleClose"
            :close-on-click-modal="false">
            <div class="content">
                <div class="title">入职信息</div>
                <div class="title">基本信息</div>
                <div class="form1">
                    <el-form :model="userInfoData" label-width="auto" style="max-width: 600px">
                        <el-form-item label="姓名">
                            <el-input v-model="userInfoData.username" />
                        </el-form-item>
                        <el-form-item label="工号">
                            <el-input v-model="userInfoData.jobnum" />
                        </el-form-item>
                        <el-form-item label="入职时间">
                            <el-input v-model="userInfoData.onboard_time" />
                        </el-form-item>
                        <el-form-item label="所属公司">
                            <el-input v-model="userInfoData.company" />
                        </el-form-item>
                        <el-form-item label="部门">
                            <el-input v-model="userInfoData.department" />
                        </el-form-item>
                        <el-form-item label="组别/项目">
                            <el-input v-model="userInfoData.group" />
                        </el-form-item>
                        <el-form-item label="司龄">
                            <el-input v-model="userInfoData.service_time" />
                        </el-form-item>
                        <el-form-item label="岗位">
                            <el-input v-model="userInfoData.station" />
                        </el-form-item>
                        <el-form-item label="电话">
                            <el-input v-model="userInfoData.phone" />
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="userInfoData.email" />
                        </el-form-item>
                        <el-form-item label="是否研发人员">
                            <el-input v-model="userInfoData.is_rd" />
                        </el-form-item>
                        <el-form-item label="公司任职级别">
                            <el-input v-model="userInfoData.office_title" />
                        </el-form-item>
                        <el-form-item label="社会职称">
                            <el-input v-model="userInfoData.social_title" />
                        </el-form-item>
                        <el-form-item label="评审专家级别">
                            <el-input v-model="userInfoData.evaluation_expert_title" />
                        </el-form-item>
                        <!-- <el-form-item label="Activity zone">
                            <el-select v-model="userInfoData.username" placeholder="please select your zone">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item> -->
                    </el-form>
                </div>
                <div class="form2">
                    <el-form :model="userInfoData" label-width="auto" style="max-width: 600px">
                        <el-form-item label="籍贯">
                            <el-input v-model="userInfoData.native_place" />
                        </el-form-item>
                        <!-- <el-form-item label="性别">
                            <el-input v-model="userInfoData.native_place" />
                        </el-form-item> -->
                        <el-form-item label="毕业院校">
                            <el-input v-model="userInfoData.graduate_school" />
                        </el-form-item>
                        <el-form-item label="民族">
                            <el-input v-model="userInfoData.nation" />
                        </el-form-item>
                        <el-form-item label="学历">
                            <el-input v-model="userInfoData.edu_bacakground" />
                        </el-form-item>
                        <el-form-item label="专业">
                            <el-input v-model="userInfoData.major" />
                        </el-form-item>
                        <el-form-item label="毕业时间">
                            <el-input v-model="userInfoData.graduate_time" />
                        </el-form-item>
                        <el-form-item label="参加工作时间">
                            <el-input v-model="userInfoData.particaipate_job_time" />
                        </el-form-item>
                        <!-- <el-form-item label="身份证号">
                            <el-input v-model="userInfoData.identity_card" />
                        </el-form-item> -->
                        <el-form-item label="运动">
                            <el-input v-model="userInfoData.sport" />
                        </el-form-item>
                        <el-form-item label="特长">
                            <el-input v-model="userInfoData.speciality" />
                        </el-form-item>
                        <el-form-item label="紧急联系人">
                            <el-input v-model="userInfoData.emergency_person" />
                        </el-form-item>
                        <el-form-item label="关系">
                            <el-input v-model="userInfoData.relationship" />
                        </el-form-item>
                        <el-form-item label="紧急联系人电话">
                            <el-input v-model="userInfoData.emergency_phone" />
                        </el-form-item>
                        <el-form-item label="个性签名">
                            <el-input v-model="userInfoData.p_signature" />
                        </el-form-item>
                        <el-form-item label="紧急联系人地址">
                            <el-input v-model="userInfoData.address" />
                        </el-form-item>
                        <!-- <el-form-item label="Activity zone">
                            <el-select v-model="userInfoData.username" placeholder="please select your zone">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item> -->
                    </el-form>
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="handleCancel">取消</el-button>
                    <el-button type="primary" @click="handleSubmit">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { GetUserInfoFromPMOM, modifyUserInfo } from '@/api/module';
import { OrgRetInfo } from '@/interface';
import { useUserStoreHooks } from '@/store/module/user';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const userStore = useUserStoreHooks();
const { avatar, jobnum } = storeToRefs(userStore);
const dialogVisible = ref(false)

interface UserInfoDataProps {
    username: string,
    jobnum: string,
    onboard_time: string,
    emergency_person: string,
    relationship: string,
    emergency_phone: string,
    address: string,
    p_signature: string,
    company: string,
    department: string,
    group: string,
    station: string,
    service_time: string,
    is_rd: string,
    office_title: string,
    social_title: string,
    evaluation_expert_title: string,
    graduate_school: string,
    particaipate_job_time: string,
    edu_bacakground: string,
    email: string,
    major: string,
    identity_card: string,
    graduate_time: string,
    native_place: string,
    sport: string,
    sex: string,
    speciality: string,
    nation: string,
    phone: string,
}

const userInfoData = ref<UserInfoDataProps>({
    username: "",
    jobnum: "",
    onboard_time: "",
    emergency_person: "",
    relationship: "",
    emergency_phone: "",
    address: "",
    p_signature: "",

    company: "",
    department: "",
    group: "",
    station: "",
    service_time: "",
    is_rd: "",
    office_title: "",
    social_title: "",
    evaluation_expert_title: "",

    graduate_school: "",
    particaipate_job_time: "",
    edu_bacakground: "",
    email: "",
    major: "",
    identity_card: "",
    graduate_time: "",

    native_place: "",
    sport: "",
    sex: "",
    speciality: "",
    nation: "",
    phone: "",
})


// const baseInfo = ref({
//     native_place: "",
//     sport: "",
//     sex: "",
//     speciality: "",
//     nation: "",
//     phone: "",
// })

// const person_card = ref({
//     graduate_school: "",
//     particaipate_job_time: "",
//     edu_bacakground: "",
//     email: "",
//     major: "",
//     identity_card: "",
//     graduate_time: ""
// })

// const onBoardInfo = ref({
//     company: "",
//     department: "",
//     group: "",
//     station: "",
//     service_time: "",
//     is_rd: "",
//     office_title: "",
//     social_title: "",
//     evaluation_expert_title: "",
// })

// const userinfo = ref({
//     username: "",
//     jobnum: "",
//     onboard_time: "",
//     emergency_person: "",
//     relationship: "",
//     emergency_phone: "",
//     address: "",
//     p_signature: "",
// })

const getData = async () => {
    const res = await GetUserInfoFromPMOM(jobnum.value);
    const { data: { data: datas, code } } = res;
    if (code === 1) {
        console.log("datas", datas)
        // userInfoData.value.native_place = (datas as OrgRetInfo).empInfo[12].infoContent
        userInfoData.value.sport = (datas as OrgRetInfo).empInfo[12].infoContent
        userInfoData.value.sex = (datas as OrgRetInfo).empInfo[7].infoContent
        userInfoData.value.speciality = (datas as OrgRetInfo).empInfo[25].infoContent
        // userInfoData.value.nation = (datas as OrgRetInfo).empInfo[12].infoContent
        userInfoData.value.phone = (datas as OrgRetInfo).empInfo[10].infoContent

        userInfoData.value.graduate_school = (datas as OrgRetInfo).empInfo[28].infoContent
        userInfoData.value.particaipate_job_time = (datas as OrgRetInfo).empInfo[21].infoContent
        userInfoData.value.edu_bacakground = (datas as OrgRetInfo).empInfo[27].infoContent
        userInfoData.value.email = (datas as OrgRetInfo).empInfo[6].infoContent
        userInfoData.value.major = (datas as OrgRetInfo).empInfo[29].infoContent
        userInfoData.value.identity_card = (datas as OrgRetInfo).empInfo[15].infoContent
        userInfoData.value.graduate_time = (datas as OrgRetInfo).empInfo[26].infoContent

        userInfoData.value.company = (datas as OrgRetInfo).empInfo[1].infoContent
        userInfoData.value.department = (datas as OrgRetInfo).empInfo[3].infoContent
        userInfoData.value.group = (datas as OrgRetInfo).empInfo[3].infoContent
        userInfoData.value.station = (datas as OrgRetInfo).empInfo[12].infoContent
        userInfoData.value.service_time = (datas as OrgRetInfo).empInfo[9].infoContent
        userInfoData.value.is_rd = (datas as OrgRetInfo).empInfo[11].infoContent
        userInfoData.value.office_title = (datas as OrgRetInfo).empInfo[13].infoContent
        userInfoData.value.social_title = (datas as OrgRetInfo).empInfo[24].infoContent
        userInfoData.value.evaluation_expert_title = (datas as OrgRetInfo).empInfo[23].infoContent

        userInfoData.value.username = (datas as OrgRetInfo).empInfo[4].infoContent
        userInfoData.value.jobnum = (datas as OrgRetInfo).empId
        userInfoData.value.onboard_time = (datas as OrgRetInfo).empInfo[8].infoContent
        userInfoData.value.emergency_person = (datas as OrgRetInfo).empInfo[32].infoContent
        userInfoData.value.relationship = (datas as OrgRetInfo).empInfo[33].infoContent
        userInfoData.value.emergency_phone = (datas as OrgRetInfo).empInfo[34].infoContent
        userInfoData.value.address = (datas as OrgRetInfo).empInfo[35].infoContent
        userInfoData.value.p_signature = (datas as OrgRetInfo).empInfo[25].infoContent
    } else {
        ElMessage.error('获取信息失败...')
    }
}

onMounted(async () => {
    await getData();
})

const handleEdit = () => {
    dialogVisible.value = true
}


const handleSubmit = async () => {
    await modifyUserInfo(userInfoData.value);
    // const { data: { data: datas, code } } = res;
    // if (code === 1) {
    //     ElMessage({
    //         message: '修改个人信息成功',
    //         type: 'success',
    //     })
    // } else {
    //     ElMessage.error('修改个人信息失败,请重新提交')
    // }

    dialogVisible.value = false
    // await getData()
}

const handleCancel = async () => {
    dialogVisible.value = false
    await getData()
}

const handleClose = async () => {
    dialogVisible.value = false
    await getData()
}
</script>

<style lang="scss" scoped>
.userinfo-container {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
    border-radius: 6px;
    box-sizing: border-box;

    .wrapper {
        height: 100%;
        display: grid;
        grid-template-columns: 76% 24%;

        .left {
            display: grid;
            grid-template-rows: 30% 68%;
            row-gap: 2%;

            .upper {
                display: grid;
                grid-template-columns: 70% 30%;
                img{
                    
                }

                .content-degree {
                    margin-left: 30px;
                }
            }

            .lower {
                width: 100%;
                display: grid;
                grid-template-columns: 53% 43%;
                grid-column-gap: 4%;

                .left-info {
                    display: grid;
                    grid-template-rows: repeat(2, 1fr);
                    row-gap: 24px;

                    .content {
                        display: grid;
                        grid-template-rows: 20% 80%;
                        row-gap: 20px;

                        .title {
                            height: 48px;
                            padding-left: 32px;
                            background: #E6F7EF;
                            border-radius: 6px;
                            line-height: 48px;
                            position: relative;

                            font-size: 18px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #454545;
                        }

                        .title::before {
                            content: "";
                            position: absolute;
                            width: 10px;
                            height: 100%;
                            background: #007571;
                            border-radius: 5px 0px 0px 5px;
                            left: 0px;
                        }
                    }

                    .content1 {

                        .baseinfo {
                            justify-self: center;
                            width: 95%;
                            height: 90%;
                            display: grid;
                            grid-template-rows: repeat(3, 1fr);
                            grid-template-columns: repeat(2, 1fr);
                            justify-items: start;
                            align-items: center;

                            background: #F9FAFC;
                            border-radius: 10px;

                            font-size: 16px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #4A5A7F;

                            .item {
                                padding-left: 20px;

                                span {
                                    font-size: 17px;
                                    margin-left: 20px;
                                }
                            }
                        }
                    }

                    .content2 {
                        .person_info {
                            justify-self: center;
                            width: 95%;
                            height: 90%;
                            display: grid;
                            grid-template-rows: repeat(4, 1fr);
                            grid-template-columns: repeat(2, 1fr);
                            justify-items: start;
                            align-items: center;

                            background: #F9FAFC;
                            border-radius: 10px;

                            font-size: 16px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #4A5A7F;

                            .item {
                                padding-left: 20px;

                                span {
                                    font-size: 17px;
                                    margin-left: 20px;
                                }
                            }
                        }
                    }

                }

                .right-info {
                    display: grid;
                    grid-template-rows: 10% 90%;
                    // row-gap: 20px;

                    .title {
                        height: 48px;
                        padding-left: 32px;
                        background: #E6F7EF;
                        border-radius: 6px;
                        line-height: 48px;
                        position: relative;

                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #454545;
                    }

                    .title::before {
                        content: "";
                        position: absolute;
                        width: 10px;
                        height: 100%;
                        background: #007571;
                        border-radius: 5px 0px 0px 5px;
                        left: 0px;
                    }

                    .job_info {
                        align-self: center;
                        width: 95%;
                        height: 95%;
                        display: grid;
                        grid-template-rows: repeat(9, 1fr);
                        justify-items: start;
                        align-items: center;

                        background: #F9FAFC;
                        border-radius: 10px;

                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #4A5A7F;

                        .item {
                            margin-left: 160px;

                            span {
                                margin-left: 20px;
                            }
                        }
                    }
                }
            }

        }

        .right {
            background: #F9FAFC;
            border-radius: 6px;
            display: grid;
            grid-template-rows: repeat(2, 1fr);

            .top {
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                justify-items: center;
                align-items: center;
                grid-row-end: 1px solid #000;
                border-bottom: 1px dashed #BFBFBF;

                img {
                    align-self: center;
                    width: 132px;
                    height: 132px;
                    border-radius: 50%;
                }

                .job_info {
                    height: 80%;
                    width: 100%;
                    align-self: center;
                    display: grid;
                    grid-template-rows: repeat(3, 1fr);
                    justify-items: center;
                    align-items: center;

                    .item {
                        span {
                            margin-left: 24px;
                        }
                    }
                }
            }

            .bottom {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                .item {
                    span {
                        margin-left: 24px;
                    }
                }

                :deep .el-button {
                    width: 100px;
                    height: 36px;
                    background: #007571;
                    border-radius: 6px;

                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 30px;
                }

            }
        }
    }

    :deep .el-dialog {
        height: 800px;

        .el-dialog__body {
            width: 100%;
            height: 80%;

            .content {
                height: 100%;
                display: grid;
                grid-template-rows: 10% 90%;
                grid-template-columns: repeat(2, 1fr);

                .title {
                    width: 90%;
                    height: 70%;
                    border-radius: 2px;
                    background-color: #007571;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-size: 18px;
                    color: #333333;
                    text-align: center;
                    line-height: 45px;
                }

                .form1,
                .form2 {
                    .el-form {
                        .el-form-item {
                            .el-form-item__label {
                                align-self: center;
                            }
                        }
                    }
                }

                .form1 {
                    .el-form {
                        height: 100%;
                        display: grid;
                        grid-template-rows: repeat(7, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0px 10px;
                    }
                }

                .form2 {
                    .el-form {
                        height: 100%;
                        display: grid;
                        grid-template-rows: repeat(8, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0px 10px;
                    }

                }
            }
        }

        .el-dialog__footer {
            text-align: center !important;

            // .dialog-footer {
            //     width: 50%;
            //     display: flex;
            //     justify-content: space-evenly;
            // }

        }


    }


}
</style>