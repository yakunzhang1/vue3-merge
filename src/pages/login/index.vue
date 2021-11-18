<template>
  <div class="main">
    <div class="login_main">
      <div class="userInfo">
        <a-form
          :labelCol="{ span: 4 }"
          ref="formRef"
          :model="formState"
          :rules="rules"
          class="login_form"
        >
          <a-form-item label="用户名" name="userName">
            <a-input v-model:value="formState.userName" />
          </a-form-item>
          <a-form-item label="密码" name="passWord">
            <a-input v-model:value="formState.passWord" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" @click="onSubmit">登陆</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from "vue";
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
      formRef.value
        .validate()
        .then(() => {
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

<style >
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
}
.login_main {
  width: 40%;
  position: absolute;
  padding-top: 200px;
  left: 0;
  right: 0;
  margin: auto;
}
.userInfo {
  width: 100%;
  padding: 80px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}
.login_form {
  /* width: 60%; */
  padding: 0 60px;
  margin: 0 auto;
}
</style>
