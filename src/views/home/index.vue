<template>
  <div class="home">
    <div class="home-side">
      <side-card v-for="s in 4" :key="s"/>
    </div>
    <div class="home-main">
      <article-list/>
    </div>
  </div>
</template>
<script>
import ArticleList from '../article/ArticleList'
import SideCard from '../../components/SideCard'
export default {
  name: 'Home',
  components: { SideCard, ArticleList }
}
</script>
<style>
.home {
  display: flex;
}
.home-side {
  flex: 23%;
  padding: 10px;
}
.home-main {
  flex: 77%;
  padding: 10px;
}
</style>
