<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="index" v-for="(item,index) in routes" :key="item.path">
                   <router-link :to="item.path">
                        {{item.title}}
                    </router-link>
            </mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
import {routes} from "@/router/routes.js"
//使用路由导航的形式进行路由的跳转 :绑定动态的属性 @绑定事件 v-model:select绑定元素的id 
export default {
    data(){
        return {
            selected:0,
            routes,
        }
    },
    methods:{

    }
}
</script>
<style scoped>
    a {
      text-decoration:none
    }
</style>


