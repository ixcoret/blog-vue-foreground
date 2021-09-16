<template>
  <el-row :gutter="20">
    <el-col :span="19" class="home-main">
      <article-list/>
    </el-col>
    <el-col :span="5" class="home-side">
      <side-card v-for="s in 4" :key="s"/>
    </el-col>
  </el-row>
</template>
<script>

import ArticleList from '../article/ArticleList'
import SideCard from '../../components/SideCard'
export default {
  name: 'Home',
  components: {
    SideCard,
    ArticleList
  }
}
</script>
<style>
</style>
