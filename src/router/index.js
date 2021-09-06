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
  }
]

const router = new VueRouter({
  routes
})

export default router
