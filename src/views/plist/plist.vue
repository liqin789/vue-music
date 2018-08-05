<template>
    <div>
        <input type="button" value="+" @click="addNum">
        <mt-button size="small" @click.native="getData">small</mt-button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import {getCookie,removeCookie} from "@/utils/index.js"
export default {
    data(){
        return{
            data:{}
        }
    },
    methods:{
        ...mapMutations({
            addNum:'increment'
        }),
        getData(){
            this.$http({
                method:"POST",
                url:`/api/role-roleDefault`,
                data:{id:16}
            }).then(function(res){
                console.log(res)
            },function(res){

            })
        }
    },
    mounted(){
        if(getCookie("username")){
            removeCookie('username')
        }
    }
}
</script>
<style>

</style>


