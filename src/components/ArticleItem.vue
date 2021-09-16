<template>
  <el-card class="article-item">
    <div v-for="o in 3" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ArticleItem'
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .article-item {
    width: 100%;
    margin-top: 10px;
  }
  .article-item:first-child {
    margin-top: 0;
  }
</style>
