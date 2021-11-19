<template>
  <div class="main">
    <div class="login_main">
        <a-form
          :labelCol="{ span: 4 }"
          ref="formRef"
          :model="formState"
          :rules="rules"
          @keyup.enter="onSubmit"
        >
          <a-form-item label="用户名" name="userName">
            <a-input  allowClear v-model:value="formState.userName" />
          </a-form-item>
          <a-form-item label="密码" name="passWord">
            <a-input  allowClear v-model:value="formState.passWord" />
          </a-form-item>
          <a-form-item>
            <div class="btn-submit">
              <a-button size="large" style="width: 80%" type="primary" @click="onSubmit">登陆</a-button>
            </div>
          </a-form-item>
        </a-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { message } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import _rule from "../../utils/ruleJson";
import _userInfo from "../../utils/userInfo";
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
      formRef.value.validate().then(() => {
          const { userName, passWord } = formState;
          if (userName === "admin" && passWord === "123456") {
            router.push({ name: "Home" });
            localStorage.setItem("rule", JSON.stringify(_rule.admin));
            localStorage.setItem("userInfo", JSON.stringify(_userInfo.admin));
          } else if (userName === "tom" && passWord === "123456") {
            router.push({ name: "Home" });
            localStorage.setItem("rule", JSON.stringify(_rule.tom));
            localStorage.setItem("userInfo", JSON.stringify(_userInfo.tom));
          } else if (userName === "jerry" && passWord === "123456") {
            router.push({ name: "Home" });
            localStorage.setItem("rule", JSON.stringify(_rule.jerry));
            localStorage.setItem("userInfo", JSON.stringify(_userInfo.jerry));
          }else{
            message.error('用户名或密码不正确！')
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    return {
      formRef,
      formState,
      rules,
      onSubmit,
    };
  },
});
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_main {
  width: 20%;
  padding: 60px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 21px 41px 0px rgba(0,0,0,0.2);
}
.btn-submit{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
