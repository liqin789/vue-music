<template>
    <div>
        <span>数量</span>
        <span>{{count}}</span>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            //count:this.$store.state.count
        }
    },
    computed:{
        ...mapState({
            count:"count"
        })
    }
}
</script>
<style>


</style>


