<template>
  <el-container class="homePage">
    <layou-aside>
      <tree-menu width="100%" class="treeMenu" :data="menu" bg-color="rgb(48, 65, 86)"
                 text-color="rgb(191, 203, 217)" :config="treeConfig" :default-active="defaultActive"></tree-menu>
    </layou-aside>
    <el-container>
      <layou-header></layou-header>
      <layou-main></layou-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from "vue"
import layouHeader from "@/components/layout/header/Header.vue"
import layouMain from "@/components/layout/main/Main.vue"
import layouAside from "@/components/layout/aside/Aside.vue"
import treeMenu from "@/components/treeMenu/TreeMenu.vue"
import {request} from "@/utils/service";

export default defineComponent({
  components: {
    treeMenu,
    layouHeader,
    layouMain,
    layouAside
  },
  setup() {
    onMounted(() => {
      userMenuClass.getUserMenu()
    })

    // 菜单栏数据源获取类
    const userMenuClass = reactive({
      defaultActive: '1',
      treeConfig: {
        name: 'menuname',
        key: 'menuid'
      },
      menu: [],
      getUserMenu: async () => {
        const url = "/getRoleMenu"
        const {data, code}: any = await request(url, {userId: "4"})
        if (code === 200) {
          userMenuClass.menu = data
        }
      }
    })
    return {...toRefs(userMenuClass)}
  }
})
</script>

<style lang="scss" scoped>
.homePage {
  height: 100%;
  width: 100%;

  .treeMenu {
    height: 100%;
    width: 100%;
  }
}
</style>