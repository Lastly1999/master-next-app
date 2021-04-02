<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html, body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
}

#app .el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover {
  background-color: #263445 !important;
}
</style>
