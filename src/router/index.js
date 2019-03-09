import Vue from 'vue'
import Router from 'vue-router'
import {
  routes
} from "./routes.js"
let Search = () => import('@/views/search/search') //搜索
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/admin/',
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置 元素的滚动的行为
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    ...routes,
    {
      path: '/Search',
      title: '搜索',
      name: 'Search',
      component: Search
    }
  ]
})
