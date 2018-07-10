import Vue from 'vue'
import Router from 'vue-router'
import {routes} from "./routes.js"
let Search = ()=>import('@/views/search/search')//搜索
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
     ...routes,
    {
        path:'/Search',
        title:'搜索',
        name:'Search',
        component:Search
    }
  ]
})
