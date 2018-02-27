<template>
  <div class="falcon-app">
    <el-row class="falcon-doc">
      <el-col :span="6" class="falcon-doc__header">
        <section class="falcon-doc__header__brand">
          <span class="falcon-doc__header__brand--name">{{ $falcon.config.name }}</span>
          <span class="falcon-doc__header__brand--version">{{ $falcon.config.version }}</span>
        </section>
        <section class="falcon-doc__header__nav">
          <tree-menu :routes="$falcon.routes" mode="vertical"></tree-menu>
        </section>
      </el-col>
      <el-col :span="18" class="falcon-doc__content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import treeMenu from './components/tree-menu'

  export default {
    name: 'app',
    components: {
      treeMenu
    }
  }
</script>

<style>
  @import "./style/app.css";
</style>
