<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="index" 
                style="cursor: pointer;"
                @click.native="linkFn(item.path)" 
                v-for="(item,index) in routes" 
                :key="item.path">
                 {{item.title}}
            </mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
import {routes} from "@/router/routes.js"
//使用路由导航的形式进行路由的跳转 :绑定动态的属性 @绑定事件 v-model:select绑定元素的id
// 在插件中加载原生的事件native  
export default {
    data(){
        return {
            selected:0,
            routes,//initdata create mounted updata destory
        }
    },
    methods:{
        linkFn(path){//使用编程式路由，进行路由的跳转
           this.$router.push({ path})
        }
    }
}
</script>
<style scoped>
    a {
      text-decoration:none
    }
</style>


