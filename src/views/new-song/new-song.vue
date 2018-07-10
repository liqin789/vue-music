<template>
    <div>
        <span>数量</span>
        <span>{{count}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:this.$store.state.count
        }
    }
}
</script>
<style>


</style>


