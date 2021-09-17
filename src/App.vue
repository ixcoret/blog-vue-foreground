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
        <span>Designed by ixcoret. All rights reserved.</span>
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
    width: 90%;
    margin: 0 auto;
  }
  .main {
    height: 3000px;
    background-color: #e6e6e6;
  }
  .content-container {
    width: 96%;
    margin: 0 auto;
    padding: 20px 0;
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
    font-size: 20px;
  }
</style>
