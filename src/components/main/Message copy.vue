<!-- <template>
    <div class="message-container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <img src="@/assets/express.png" alt="" />
                    <div class="title">消息提醒</div>
                </div>
            </template>
            <div class="card-content">
                <div class="item">
                    <img src="@/assets/pm1.png" alt="" />
                    <div class="title">我的工作</div>
                </div>
                <div class="item">
                    <img src="@/assets/oec1.png" alt="" />
                    <div class="title">我的绩效</div>
                </div>
                <div class="item">
                    <img src="@/assets/doc1.png" alt="" />
                    <div class="title">我的文档</div>
                </div>
                <div class="item">
                    <img src="@/assets/checkin1.png" alt="" />
                    <div class="title">我的考勤</div>
                </div>
                <div class="item">
                    <img src="@/assets/warnning1.png" alt="" />
                    <div class="title">我的预警</div>
                </div>
                <div class="item">
                    <img src="@/assets/fm1.png" alt="" />
                    <div class="title">我的生产</div>
                </div>
            </div>

        </el-card>
    </div>
</template>
   

<script setup lang="ts">


const 


</script>

<style lang="scss" scoped>
.message-container {
    width: 100%;
    height: 100%;

    .box-card {
        width: 100%;
        height: 100%;

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

        :deep .el-card__body{
            padding: 0px !important;
            height: 80%;
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
            }
        }
        }

       
    }

}
</style> -->