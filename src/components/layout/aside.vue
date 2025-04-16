<template>
  <div class="aside-layout">
    <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <p class="aside-title">滴滴陪诊</p>
    <treeMenu></treeMenu>
  </el-menu>
  </div>
</template>

<script setup lang="ts">
import treeMenu from './treeMenu.vue'
const handleOpen = (index: string) => {
  console.log('open', index)
}
const handleClose = (index: string) => {
  console.log('close', index)
}
</script>

<style lang="less" scoped>
.aside-layout {
  width: 200px;
  height: 100vh;
  background-color: #545c64;
  color: #fff;
  .aside-title {
    text-align: center;
    font-size: 16px;
  }
  .el-menu-vertical-demo {
    height: 100%;
    line-height: 60px;
    background-color: #545c64;
    .el-menu-item {
      color: #fff;
      &:hover {
        background-color: #ffd04b !important;
        color: #000 !important;
      }
    }
    .el-sub-menu__title {
      color: #fff;
      &:hover {
        background-color: #ffd04b !important;
        color: #000 !important;
      }
    }
  }
}
</style>
