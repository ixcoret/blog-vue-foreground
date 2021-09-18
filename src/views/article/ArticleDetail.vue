<template>
  <div class="article-detail-container">
    <div class="article-detail-main">
      <el-card>
        <div v-html="article.content">
        </div>
      </el-card>
    </div>
    <div class="article-detail-side">
      <el-card>
        <span>卡片内容</span>
        <div v-for="o in 3" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { getArticleById } from '@/api/article'

export default {
  name: 'ArticleDetail',
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      getArticleById(this.$route.params.articleId).then(resp => {
        if (resp) {
          this.article = resp.data
          this.article.content = marked(this.article.content)
        }
      })
    }
  }
}
</script>

<style scoped>
.article-detail-container {
  display: flex;
}
.article-detail-side {
  flex: 23%;
  padding: 10px;
}
.article-detail-main {
  flex: 77%;
  padding: 10px;
}
</style>
