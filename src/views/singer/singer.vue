<template>
    <div>
       <input type="button" value="+带数据数据" @click="add" >
       <hr/>
       <input type="button" value="+默认加1提交" @click="increment">
       <br/>
       <span>当前的值：{{count}}</span>
    </div>
</template>
<script>
import { mapActions ,mapState} from 'vuex'
import {getCookie} from "@/utils/index.js"
export default {
    data(){
       return{

       } 
    },
    methods:{//mapActions
        ...mapActions(['increment']),
        //action提交额外数据的时候需要手动调用
        add(){
           this.$store.dispatch("increment",{
             n:2
           })
        }
    },
     computed:{
             ...mapState([
                 "count"
             ]),
     },
    mounted(){
      //适当的将变量进行存储，就行优化的方便查找
      let username = getCookie("username") || "";
      if(username){
         //  alert(username)
      }
    }
    
}
</script>

