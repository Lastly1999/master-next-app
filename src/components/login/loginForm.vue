<template>
  <el-form :model="param" class="demo-form-inline">
    <el-form-item>
      <el-input v-model="param.userName" placeholder="请输入用户名">
        <template #prefix>
          <i class="el-icon-user-solid"></i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="param.passWord" placeholder="请输入密码" show-password>
        <template #prefix>
          <i class="el-icon-unlock"></i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" type="primary" @click="onSubmit" :loading="loading">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "loginForm",
  props: ['loginForm', 'loading'],
  setup(props, content) {
    // 表单参数
    const param = ref(props.loginForm)

    // 登录提交
    const onSubmit = () => {
      content.emit('submit')
    }
    // 注册方法
    const onRegister = () => {
      content.emit('register')
    }
    return {
      onSubmit,
      onRegister,
      param
    }
  }
})
</script>
