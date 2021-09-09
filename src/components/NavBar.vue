<template>
  <div class="nav-container">
    <el-row type="flex" align="middle" justify="space-between">
      <el-col :span="4" class="logo">
        <router-link to="/">
          <span style="color: #006cff">原子博客</span>
        </router-link>
      </el-col>

      <el-col :span="10" class="main-menu">
        <el-menu :default-active="this.$route.path" active-text-color="#409eff" mode="horizontal" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/category">分类</el-menu-item>
          <el-menu-item index="/tag">标签</el-menu-item>
          <el-menu-item index="/timeline">时光轴</el-menu-item>
          <el-menu-item index="/link">友链</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
          <el-submenu index="">
            <template slot="title">博客源码</template>
            <el-menu-item index=""><a href="https://github.com/ixcoret/vueblog" target="_blank">博客前台前端源码</a></el-menu-item>
            <el-menu-item index=""><a href="https://github.com/ixcoret/vueblog-admin" target="_blank">博客后台管理前端源码</a></el-menu-item>
            <el-menu-item index=""><a href="https://github.com/ixcoret/blog" target="_blank">博客Java后端源码</a></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="4">
        <div class="search">
          <el-input
            v-model="keywords"
            class="input-search"
            size="small"
            placeholder="请输入搜索内容...此功能待开发"
            prefix-icon="el-icon-search"
            @keydown.enter.native="search">
          </el-input>
        </div>
      </el-col>

      <el-col :span="4" style="text-align: center">
        <!--此部分内容待定-->
        <span>此处实现登录注册功能</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    search() {
      this.$router.push({ path: '/search' })
    }
  }
}
</script>

<style scoped>
  .nav-container {
    width: 90%;
    margin: 0 auto;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .logo span {
    font-size: 28px;
  }
  .main-menu {
    display: flex;
    justify-content: center;
  }
  .search {
    display: flex;
    justify-content: center;
  }
</style>
