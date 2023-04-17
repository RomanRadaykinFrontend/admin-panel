<template>
  <div class="default">
    <el-container>
      <el-header>
        <div class="default__header-content">
          <span class="text-large font-600 mr-3"> SMS service </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideContent />
        </el-aside>
        <el-main><NuxtPage /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AsideContent from "@/components/AsideContent.vue";
</script>

<style scoped lang="scss">
.default {
  &:deep .el-header {
    padding: 0;
  }
  &:deep .el-container {
    height: 100%;
  }
  &:deep .el-aside {
    width: 300px;
  }
  &__header-content {
    background: #1d3043;
    padding: 15px;
    display: flex;
    color: white;
    align-items: center;
    grid-column-gap: 10px;
    height: 100%;
  }
}
</style>
