<template>
    <div>
       现在的count是:{{count}}
    </div>
</template>
<script>
import { mapState } from 'vuex'
import {setCookie} from "@/utils/index.js"
export default {
	//es6的模块化的概念。面向对象的思维。面向对象的思维 
    data(){
        return{
            data(){
                
            }
        }
    },
    methods:{

    },
    computed:{
             ...mapState([
                 "count"
             ]),
        //    count () {
        //       return this.$store.state.count
        //     }
          
    },
    mounted(){
    	setCookie("username","liqin");
    },

}
</script>

