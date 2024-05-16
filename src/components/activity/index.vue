<template>
  <div class="container">
    <el-card class="box-card">
      <div class="wrapper">
        <el-upload
          class="upload-demo"
          drag
          :show-file-list="true"
          :file-list="fileList"
          :action="`${basePath}` + '/admin/uploadActivityPic'"
          :before-upload="handleBeforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽或
            <em>点击</em>
            上传图片
          </div>
          <template #tip>
            <div class="el-upload__tip">仅能上传.png\.jpg格式图片</div>
          </template>
        </el-upload>
      </div>
      <el-button type="primary" @click="uploadAndSubmit"> 上传 </el-button>
    </el-card>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="上传"
    width="500"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <span>请确认是否上传图片</span>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElUpload, ElIcon, ElMessage, ElLoading } from "element-plus";
import { ErrorResProps, SuccessResProps } from "@/interface";
import { cancelUploadPic, confirmUploadPic } from "@/api/module";

export interface UploadFileProps {
  id: string;
  filename: string;
  filepath: string;
  filehashname: string;
}

const basePath = import.meta.env.VITE_APP_BASE_API;
const fileinfo = ref({} as UploadFileProps);
const fileList = ref([]);
const loading = ref();

const dialogVisible = ref(false);

//上传前检查图片格式
const handleBeforeUpload = (file: any) => {
  const fileType = file.name.endsWith(".jpg") || file.name.endsWith(".png");
  if (!fileType) {
    ElMessage.error("不支持的图片格式!");
    return false;
  }
  return true;
};
//上传成功后获取服务器返回文件信息
const handleSuccess = async (
  res: ErrorResProps | SuccessResProps,
  _: any,
  fileLists: any
) => {
  if (res.code === 0) {
    fileLists.value = [];
    fileinfo.value = {} as UploadFileProps;
    ElMessage.error(res.msg);
    setTimeout(() => {
      fileList.value = [];
    }, 2000);
    return;
  }
  const { data } = res as SuccessResProps;
  fileinfo.value = data;
  fileList.value = fileLists;
};
const handleError = (err: Error) => {
  ElMessage.error(err.message);
};

//提交并上传图片
const submitFileConfirm = async () => {
  dialogVisible.value = false;
  loading.value = ElLoading.service({
    lock: true,
    text: "图片上传中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  const res = await confirmUploadPic(fileinfo.value);
  loading.value.close();
  fileList.value = [];
  fileinfo.value = {} as UploadFileProps;
  const {
    data: { code },
  } = res;
  if (code === 0) {
    ElMessage.error("图片上传失败!");
    return;
  }
  ElMessage.success("图片上传成功!");
};

//取消上传图片
const cancelSubmitFile = async () => {
  dialogVisible.value = false;
  const res = await cancelUploadPic(fileinfo.value);
  const {
    data: { code },
  } = res;
  if (code === 0) {
    ElMessage.error("取消上传失败!");
    return;
  }
  ElMessage.success("取消上传成功!");
  fileList.value = [];
  fileinfo.value = {} as UploadFileProps;
};

const uploadAndSubmit = async () => {
  dialogVisible.value = true;
};

const handleConfirm = async () => {
  await submitFileConfirm();
};

const handleCancel = async () => {
  await cancelSubmitFile();
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background: #f0f2f5;

  :deep .box-card {
    height: 100%;
    .el-card .el-card__body {
      min-height: calc(100vh - 200px);
      padding: 20px 100px;

      .wrapper {
        .el-upload-dragger {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .el-upload__text {
            font-size: 16px;
          }
        }

        .el-icon {
          color: #c0c4cc;
          font-size: 60px;
        }
      }

      .el-button {
        float: right;
        margin: 20px;
        float: right;
      }
    }
  }
}

:deep .el-dialg {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #454545;
}
</style>
