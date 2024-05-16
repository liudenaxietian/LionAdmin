<template>
  <div class="editor-container">
    <div class="wrapper">
      <div class="editor-area">
        <div class="title">
          <el-input v-model="title" placeholder="请输入标题..."></el-input>
        </div>
        <div class="wangeditor">
          <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode"
            style="background: #FAFAFA; border-bottom:1px solid #ccc" />
          <Editor v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
            style="height: 400px; overflow-y: hidden" @onCreated="handleCreated" />
        </div>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
  </div>
</template>


<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import { uploadExpress } from "@/api/module";
import { ElMessage } from "element-plus";
import { useUserStoreHooks } from "@/store/module/user";
import { storeToRefs } from "pinia";

const userStore = useUserStoreHooks();
const { username } = storeToRefs(userStore)

defineOptions({
  name: "BaseEditor"
});

const mode = "default";
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const title = ref("");
const valueHtml = ref("");

// 模拟 ajax 异步获取内容
onMounted(() => {

});

const toolbarConfig: any = { excludeKeys: "fullScreen" };
const editorConfig = { placeholder: "请输入内容..." };

const handleCreated = (editor: any) => {
  // 记录 editor 实例，重要！
  editorRef.value = editor;
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleSubmit = async () => {
  const res = await uploadExpress(username.value, title.value, valueHtml.value)
  if (res) {
    ElMessage({
      message: '上传成功...',
      type: 'success',
    })
  } else {
    ElMessage.error('上传失败...')
  }
}
</script>

<style lang="scss" scoped>
.editor-container {
  max-height: calc(100vh - 210px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .wrapper {
    // height: 80%;
    background: #FAFBFC;
    border: 1px solid #C4DBEA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .editor-area {
      height: 100%;
      background: #FAFBFC;
      box-shadow: 0px 10px 10px 0px rgba(204, 204, 204, 0.1);
      border-radius: 6px;
      display: flex;
      flex-direction: column;

      // justify-content: flex-start;
      // align-items: center;

      .title {
        :deep .el-input {
          .el-input__wrapper {
            .el-input__inner {
              height: 42px;
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
      }

      .wangeditor {
        flex-grow: 1;
          margin-top: 10px;
        border: 1px solid #e2e2e2;
      }
    }
  }


  .btn {
    margin: 20px 10px;
    display: flex;
    justify-content: flex-end;

    .el-button {
      width: 100px;
      height: 42px;
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
</style>