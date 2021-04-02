<template>
  <el-main>
    <slot></slot>
  </el-main>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Main"
})
</script>

<style scoped>

</style>