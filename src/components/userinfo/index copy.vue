<!-- <template>
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
                                    籍贯:<span>{{ baseInfo.native_place }}</span>
                                </div>
                                <div class="item">
                                    运动:<span>{{ baseInfo.sport }}</span>
                                </div>
                                <div class="item">
                                    性别:<span>{{ baseInfo.sex }}</span>
                                </div>
                                <div class="item">
                                    特长:<span>{{ baseInfo.speciality }}</span>
                                </div>
                                <div class="item">
                                    民族:<span>{{ baseInfo.nation }}</span>
                                </div>
                                <div class="item">
                                    电话:<span>{{ baseInfo.phone }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content content2">
                            <div class="title">
                                个人名片
                            </div>
                            <div class="person_info">
                                <div class="item">
                                    毕业院校:<span>{{ person_card.graduate_school }}</span>
                                </div>
                                <div class="item">
                                    参加工作时间:<span>{{ person_card.particaipate_job_time }}</span>
                                </div>
                                <div class="item">
                                    学历:<span>{{ person_card.edu_bacakground }}</span>
                                </div>
                                <div class="item">
                                    邮箱:<span>{{ person_card.email }}</span>
                                </div>
                                <div class="item">
                                    专业:<span>{{ person_card.major }}</span>
                                </div>
                                <div class="item">
                                    身份证号:<span>{{ person_card.identity_card }}</span>
                                </div>
                                <div class="item">
                                    毕业时间:<span>{{ person_card.graduate_time }}</span>
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
                                所属公司:<span>{{ onBoardInfo.company }}</span>
                            </div>
                            <div class="item">
                                部门:<span>{{ onBoardInfo.department }}</span>
                            </div>
                            <div class="item">
                                组别/项目:<span>{{ onBoardInfo.group }}</span>
                            </div>
                            <div class="item">
                                岗位:<span>{{ onBoardInfo.station }}</span>
                            </div>
                            <div class="item">
                                司龄:<span>{{ onBoardInfo.service_time }}</span>
                            </div>
                            <div class="item">
                                是否研发人员:<span>{{ onBoardInfo.is_rd }}</span>
                            </div>
                            <div class="item">
                                公司任职级别:<span>{{ onBoardInfo.office_title }}</span>
                            </div>
                            <div class="item">
                                社会职称:<span>{{ onBoardInfo.social_title }}</span>
                            </div>
                            <div class="item">
                                评审专家级别:<span>{{ onBoardInfo.evaluation_expert_title }}</span>
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
                            姓名:<span>{{ userinfo.username }}</span>
                        </div>
                        <div class="item">
                            工号:<span>{{ userinfo.jobnum }}</span>
                        </div>
                        <div class="item">
                            入职时间:<span>{{ userinfo.onboard_time }}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="item">
                        紧急联系人:<span>{{ userinfo.emergency_person }}</span>
                    </div>
                    <div class="item">
                        关系:<span>{{ userinfo.relationship }}</span>
                    </div>
                    <div class="item">
                        紧急联系人电话:<span>{{ userinfo.emergency_phone }}</span>
                    </div>
                    <div class="item">
                        地址:<span>{{ userinfo.address }}</span>
                    </div>
                    <div class="item">
                        个性签名:<span>{{ userinfo.p_signature }}</span>
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
                    <el-form :model="userinfo" label-width="auto" style="max-width: 600px">
                        <el-form-item label="姓名">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="工号">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="入职时间">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="所属公司">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="部门">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="组别/项目">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="司龄">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="岗位">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="电话">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="是否研发人员">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="公司任职级别">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="社会职称">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="评审专家级别">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                    </el-form>
                </div>
                <div class="form2">
                    <el-form :model="userinfo" label-width="auto" style="max-width: 600px">
                        <el-form-item label="籍贯">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="毕业院校">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="民族">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="学历">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="专业">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="毕业时间">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="参加工作时间">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="运动">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="特长">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="紧急联系人">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="关系">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="紧急联系人电话">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="个性签名">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                        <el-form-item label="紧急联系人地址">
                            <el-input v-model="userinfo.username" />
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { GetUserInfoFromPMOM } from '@/api/module';
import { OrgRetInfo } from '@/interface';
import { useUserStoreHooks } from '@/store/module/user';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const userStore = useUserStoreHooks();

const { avatar, jobnum } = storeToRefs(userStore);

const dialogVisible = ref(false)



const userInfoData = ref({
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


const baseInfo = ref({
    native_place: "",
    sport: "",
    sex: "",
    speciality: "",
    nation: "",
    phone: "",
})

const person_card = ref({
    graduate_school: "",
    particaipate_job_time: "",
    edu_bacakground: "",
    email: "",
    major: "",
    identity_card: "",
    graduate_time: ""
})

const onBoardInfo = ref({
    company: "",
    department: "",
    group: "",
    station: "",
    service_time: "",
    is_rd: "",
    office_title: "",
    social_title: "",
    evaluation_expert_title: "",
})

const userinfo = ref({
    username: "",
    jobnum: "",
    onboard_time: "",
    emergency_person: "",
    relationship: "",
    emergency_phone: "",
    address: "",
    p_signature: "",
})

onMounted(async () => {
    const res = await GetUserInfoFromPMOM(jobnum.value);
    const { data: { data: datas, code } } = res;
    if (code === 1) {
        console.log("datas", datas)
        // baseInfo.value.native_place = (datas as OrgRetInfo).empInfo[12].infoContent
        baseInfo.value.sport = (datas as OrgRetInfo).empInfo[12].infoContent
        baseInfo.value.sex = (datas as OrgRetInfo).empInfo[7].infoContent
        baseInfo.value.speciality = (datas as OrgRetInfo).empInfo[25].infoContent
        // baseInfo.value.nation = (datas as OrgRetInfo).empInfo[12].infoContent
        baseInfo.value.phone = (datas as OrgRetInfo).empInfo[10].infoContent

        person_card.value.graduate_school = (datas as OrgRetInfo).empInfo[28].infoContent
        person_card.value.particaipate_job_time = (datas as OrgRetInfo).empInfo[21].infoContent
        person_card.value.edu_bacakground = (datas as OrgRetInfo).empInfo[27].infoContent
        person_card.value.email = (datas as OrgRetInfo).empInfo[6].infoContent
        person_card.value.major = (datas as OrgRetInfo).empInfo[29].infoContent
        person_card.value.identity_card = (datas as OrgRetInfo).empInfo[15].infoContent
        person_card.value.graduate_time = (datas as OrgRetInfo).empInfo[26].infoContent

        onBoardInfo.value.company = (datas as OrgRetInfo).empInfo[1].infoContent
        onBoardInfo.value.department = (datas as OrgRetInfo).empInfo[3].infoContent
        onBoardInfo.value.group = (datas as OrgRetInfo).empInfo[3].infoContent
        onBoardInfo.value.station = (datas as OrgRetInfo).empInfo[12].infoContent
        onBoardInfo.value.service_time = (datas as OrgRetInfo).empInfo[9].infoContent
        onBoardInfo.value.is_rd = (datas as OrgRetInfo).empInfo[11].infoContent
        onBoardInfo.value.office_title = (datas as OrgRetInfo).empInfo[13].infoContent
        onBoardInfo.value.social_title = (datas as OrgRetInfo).empInfo[24].infoContent
        onBoardInfo.value.evaluation_expert_title = (datas as OrgRetInfo).empInfo[23].infoContent

        userinfo.value.username = (datas as OrgRetInfo).empInfo[4].infoContent
        userinfo.value.jobnum = (datas as OrgRetInfo).empId
        userinfo.value.onboard_time = (datas as OrgRetInfo).empInfo[8].infoContent
        userinfo.value.emergency_person = (datas as OrgRetInfo).empInfo[32].infoContent
        userinfo.value.relationship = (datas as OrgRetInfo).empInfo[33].infoContent
        userinfo.value.emergency_phone = (datas as OrgRetInfo).empInfo[34].infoContent
        userinfo.value.address = (datas as OrgRetInfo).empInfo[35].infoContent
        userinfo.value.p_signature = (datas as OrgRetInfo).empInfo[25].infoContent
    } else {
        ElMessage.error('获取信息失败...')
    }
})


const handleEdit = () => {
    dialogVisible.value = true
}


const handleClose = () => {
    dialogVisible.value = false
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
        margin-left: 42px;
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

                img {}

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
                    background-color: #007571;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-size: 18px;
                    color: #333333;
                    text-align: center;
                }
                .form1,.form2{
                    .el-form{
                        .el-form-item{
                            .el-form-item__label{
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
                    }
                }

                .form2 {
                    .el-form {
                        height: 100%;
                        display: grid;
                        grid-template-rows: repeat(8, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                    }

                }
            }
        }


    }


}
</style> -->