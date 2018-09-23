<template>
    <div>
       <input type="button" value="+带数据数据" @click="add(5)" >
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
        //在此处的时候。increasement相当于是一个函数

        //action提交额外数据的时候需要手动调用  mapAction提交数据的时候，需要可以进行传递参数的形式

            //mapaction相当于是一个函数 可以相互的调用


      ...mapActions([
          "increment"
      ]),

    

        add(num){
          this.increment({
              n:num
          })

        //    this.$store.dispatch("increment",{
        //      n:num
        //    })
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

