<template>
  <el-header>
    <slot></slot>
  </el-header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Header"
})
</script>

<style scoped>

</style>