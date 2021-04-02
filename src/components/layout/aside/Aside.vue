<template>
  <el-aside :width="width">
    <slot></slot>
  </el-aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Aside",
  props: {
    width: {
      type: String,
      default: () => "200px"
    }
  }
})
</script>

<style scoped>

</style>