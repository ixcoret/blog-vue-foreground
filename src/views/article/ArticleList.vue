<template>
  <div class="articles-container">
    <el-card class="article-item" v-for="article in articleList" :key="article.id">
      <h3>
        <router-link :to="'/article/' + article.id">
          <span>{{article.title}}</span>
        </router-link>
      </h3>
      <p>{{article.content}}</p>
    </el-card>
    <el-pagination
      class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.pageNum"
      :page-sizes="[5, 10, 15]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script>
import { listArticles } from '@/api/article'

export default {
  name: 'ArticleList',
  data() {
    return {
      articleList: [],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.listArticles()
  },
  methods: {
    listArticles() {
      const condition = { pageNum: this.pagination.pageNum, pageSize: this.pagination.pageSize }
      listArticles(condition).then(resp => {
        if (resp) {
          this.articleList = resp.data.list
          this.pagination.total = resp.data.total
        }
      })
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.listArticles()
    },
    handleCurrentChange(val) {
      this.pagination.pageNum = val
      this.listArticles()
    }
  }
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
  margin-top: 5px;
}
.article-item:first-child {
  margin-top: 0;
}

.pagination {
  margin-top: 20px;
}
</style>
