<template>
  <div>
    <article-item v-for="article in articleList" :key="article.id"/>
  </div>
</template>

<script>
import ArticleItem from '../../components/ArticleItem'
import { listArticles } from '../../api/article'

export default {
  name: 'ArticleList',
  components: { ArticleItem },
  data() {
    return {
      articleList: []
    }
  },
  created() {
    const condition = { pageNum: 1, pageSize: 10 }
    listArticles(condition).then(resp => {
      if (resp) {
        this.articleList = resp.data.list
      }
    })
  }
}
</script>

<style scoped>
</style>
