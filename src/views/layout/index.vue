<template>
  <div class="common-layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from '@/components/layout/aside.vue';
</script>

<style scoped></style>
