import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/router/modules/home'
import Home2 from '@/router/modules/home2'
let asyncRoutes = [
  Home,
  Home2
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "首页"
      },
      component: () => import('@/views/home/1hello.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "about"
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    }
  ]
})
//动态路由（异步路由、导航栏路由）

asyncRoutes.forEach((item1)=>{
  item1.children.forEach((item2)=>{
    router.addRoute(item2)
  })
})
export default {router,asyncRoutes}
