<template>
    <div>
       <input type="button" value="+" @click="addNum">
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
       return{

       } 
    },
    methods:{
        ...mapActions({
            addNum:'increment'
        })
        
    }
    
}
</script>

