<template>
  <div id="app">
    <div class="header" v-show="isShow">
      <navbar></navbar>
    </div>

    <div class="main">
      <router-view />
    </div>

    <div class="footer">
      <div class="copyright">
        <span>Designed by ixcoret. All rights reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
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
        if (e.wheelDelta > 0 && this.show === false) { // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) { // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) { // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) { // 当滑轮向下滚动
          this.show = false
        }
      }
    }
  }
}
</script>

<style>
  .main {
    height: 800px;
    background-color: #e6e6e6;
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
