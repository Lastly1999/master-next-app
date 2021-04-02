<template>
  <div class="login">
    <Wave style="position:absolute;"></Wave>
    <div class="loginForm">
      <h1 class="loginFormTitle">adminUser</h1>
      <loginForm v-model:login-form="loginForm" @submit="loginAction" :loading="loading"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import {Router, useRouter} from "vue-router";
import loginForm from "@/components/login/loginForm.vue"
import {request} from "@/utils/service";
import {showMsg} from "@/utils/eleui/message";
import Wave from "@/components/wave/Wave.vue"

export default defineComponent({
  name: 'login',
  components: {
    loginForm,
    Wave
  },
  setup() {
    // 路由实例
    const router: Router = useRouter();

    // 登录类
    const loginClass = reactive({
      loading: false,
      loginForm: {
        userName: "",
        passWord: ''
      },
      loginAction: async () => {
        loginClass.loading = true
        const url = "/loginAction"
        const {code, msg}: any = await request(url, loginClass.loginForm)
        if (code === 200) {
          showMsg('success', msg);
          await router.push('/home')
        } else {
          showMsg("error", msg)
        }
        loginClass.loading = false
      }
    })
    return {...toRefs(loginClass)}
  }
});
</script>
<style lang="scss">
.login {
  align-items: flex-start;
  opacity: 1;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
}

.loginForm {
  width: 500px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  margin-top: 10%;
  z-index: 999;
  background: transparent;
}

.loginFormTitle {
  margin-bottom: 50px;
  text-align: center;
  color: #fff;
  font-family: "JetBrains Mono";
}
</style>