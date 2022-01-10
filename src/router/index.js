import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:articleId',
    name: 'ArticleDetail',
    component: () => import('@/views/article/ArticleDetail')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category')
  },
  {
    path: '/tag',
    name: 'Tag',
    component: () => import('@/views/tag')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/timeline')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('@/views/link')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
