<template>
  <div class="home">
    <div class="home-main">
      <article-list/>
    </div>
    <div class="home-side">
      <side-card v-for="s in 4" :key="s"/>
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

.home-main {
  flex: 3;
  margin-right: 20px;
}
.home-side {
  flex: 1;
}
</style>
