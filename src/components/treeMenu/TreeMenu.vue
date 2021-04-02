<template>
  <el-menu
      :mode="mode"
      :style="{width:width,height:height}"
      class="el-menu-vertical-demo"
      :background-color="bgColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
  >
    <!-- 带递归的子组件 -->
    <sub-menu :data="data" :config="config"></sub-menu>
  </el-menu>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

/**
 * 待递归的子组件
 */
const subMenu = {
  template: `
    <template v-for="item in data">
      <el-submenu v-if="item.children" :key="item[config.key]" :index="item[config.key]">
        <template #title>{{ item[config.name] }}</template>
        <sub-menu :data="item.children" :config="config"></sub-menu>
      </el-submenu>
      <el-menu-item style="background: rgb(48, 65, 86)" :index="item[config.key]" :key="item[config.key]" v-else>
        {{ item[config.name] }}
      </el-menu-item>
    </template>
  `,
  name: 'subMenu',
  props: {
    /**
     * tree数据源
     * @param data
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 配置项 包含key值和在数据源中取的名称字段
     * @param config
     */
    config: {
      type: Object,
      default: () => {
        return {
          key: '',
          name: ""
        }
      }
    },
  }
}
/**
 * 父组件
 */
export default defineComponent({
  name: "treeMenu",
  components: {
    subMenu
  },
  props: {
    /**
     * tree的宽度
     * @param width
     */
    width: {
      type: String,
      default: () => '100%'
    },
    /**
     * tree的高度
     * @param height
     */
    height: {
      type: String,
      default: () => '100%'
    },
    /**
     * 子组件tree数据源
     * @param data
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 开始默认选中的菜单
     * @param default-active
     */
    defaultActive: {
      type: String,
      default: () => '2'
    },
    /**
     * 子组件的配置项 包含key值和在数据源中取的名称字段
     * @param config
     */
    config: {
      type: Object,
      default: () => {
        return {
          key: '',
          name: ""
        }
      }
    },
    /**
     * 菜单的背景颜色
     * @param bg-color
     */
    bgColor: {
      type: String,
      default: () => ""
    },
    /**
     * 菜单的文字颜色
     * @param text-color
     */
    textColor: {
      type: String,
      default: () => ""
    },
    /**
     * 当前激活的菜单文字颜色
     * @param active-text-color
     */
    activeTextColor: {
      type: String,
      default: () => ""
    },
    /**
     * 树形的菜单的mode
     * @param mode
     */
    mode: {
      type: String,
      default: () => "vertical"
    }
  },
})
</script>