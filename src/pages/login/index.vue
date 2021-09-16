<template>
  <div class="login_main">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item label="用户名" name="userName">
        <a-input v-model:value="formState.userName" />
      </a-form-item>
      <a-form-item label="密码" name="passWord">
        <a-input v-model:value="formState.passWord" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts'>
import { message } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import router from "../../router/index";
export default defineComponent({
  name: "Login",
  setup() {
    const formRef = ref();
    const formState = reactive({
      userName: undefined,
      passWord: undefined,
    });
    const rules = {
      userName: { required: true, message: "请输入用户名" },
      passWord: { required: true, message: "请输入密码" },
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          const { userName, passWord } = formState;
          if (userName === "admin" && passWord === "111111") {
            router.push({ name: "home" });
          } else {
            message.info("请输入正确的密码");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      rules,
      onSubmit,
    };
  },
});
</script>

<style >
.login_main {
  width: 60%;
  margin: 0 auto;
}
</style>
