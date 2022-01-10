<template>
  <div id="app">
    <div class="header">
      <nav-bar class="nav-bar"></nav-bar>
    </div>

    <div class="main">
      <router-view class="content-container"/>
    </div>

    <div class="footer">
      <div class="copyright">
        <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021027345号</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
  .nav-bar {
    width: 98%;
    margin: 0 auto;
  }
  .main {
    height: 1000px;
    background-color: #e6e6e6;
  }
  .content-container {
    width: 98%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .footer {
    background-color: #f5f5f5;
  }
  .copyright {
    width: 80%;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
  }
</style>
