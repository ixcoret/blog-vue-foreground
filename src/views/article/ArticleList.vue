<template>
  <div>
    <article-item v-for="i in 4" :key="i"/>
  </div>
</template>

<script>
import ArticleItem from '../../components/ArticleItem'
import { listArticles } from '../../api/article'

export default {
  name: 'ArticleList',
  components: { ArticleItem },
  created() {
    const condition = { pageNum: 1, pageSize: 10 }
    listArticles(condition).then(resp => {
      if (resp) {
        console.log(resp.data)
      }
    })
  }
}
</script>

<style scoped>
</style>
