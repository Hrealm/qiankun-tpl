<template>
  <el-container>
    <el-aside width="200px">
      <AsideMenu/>
    </el-aside>
    <el-container>
      <el-header>
        <HelloWorld msg="Welcome to Your Vue.js + Qiankun App"/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import AsideMenu from '@/components/AsideMenu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AsideMenu
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-container{
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-aside {
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
