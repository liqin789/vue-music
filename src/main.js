// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'

import store from './store/index'

import lqUl from './components/lq-ul'
Vue.component('lqUl', lqUl)

import axios from 'axios'

Vue.prototype.$http = axios

import Print from 'vue-print-nb'
Vue.use(Print)

import 'mint-ui/lib/style.css'
Vue.use(Mint)

//引入element-ui
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import 'vue-tree-halower/dist/halower-tree.min.css' // you can customize the style of the tree
import VTree from 'vue-tree-halower'

Vue.use(VTree)

//定义全局的事件事件总线
Vue.prototype.bus = new Vue()

//自己封装的弹框插件

import components from './utils/component'
for (let attr in components) {
  Vue.use(components[attr])
}

// import Toast from "./components/toast"
// Vue.use(Toast)

// import Loading from "./components/Loading/Loading.js"
// Vue.use(Loading)

// import Img from "./components/Img/Img.js"
// Vue.use(Img)

import _directive from './utils/directive.js'
for (let attr in _directive) {
  Vue.directive(attr, _directive[attr])
}
Vue.config.productionTip = false


 Vue.filter('filterState', function (value,arg) {
     //使用过滤器进行传递参数  第一个第二个参数
     console.log("arg",arg)
      const state=[
        {
          label:'a',value:'1'
        },
        {
          label:'b',value:'2'
        },
        {
          label:'c',value:'3'
        }
      ]
      let data = state.find((item)=>{
        return item.value == value
      })
      return data.label
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
