<template>
  <div id="app">
    <transition name="fade">
      <div class="header" v-show="isShow">
        <nav-bar class="nav-bar"></nav-bar>
      </div>
    </transition>

    <div class="main">
      <div class="content">
        <router-view />
      </div>
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
  },
  data() {
    return {
      isShow: true
    }
  },
  created() {
    this.mouseScroll()
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) { // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    watchScroll (e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.isShow === false) { // 当滑轮向上滚动
          this.isShow = true
        }
        if (e.wheelDelta < 0 && this.isShow === true) { // 当滑轮向下滚动
          this.isShow = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.isShow === false) { // 当滑轮向上滚动
          this.isShow = true
        }
        if (e.detail > 0 && this.isShow === true) { // 当滑轮向下滚动
          this.isShow = false
        }
      }
    }
  }
}
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;
  }
  .nav-bar {
    width: 90%;
    margin: 0 auto;
  }
  .main {
    height: 3000px;
    margin-top: 60px;
    background-color: #e6e6e6;
  }
  .content {
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
