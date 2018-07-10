<template>
    <div>
        <input type="button" value="+" @click="addNum">
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        ...mapMutations({
            addNum:'increment'
        })
    }
}
</script>
<style>

</style>


