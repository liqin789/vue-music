<template>
    <div class="wrapper"
         v-if="isshow">
        <div class="loading">
            <img src="./loading.gif"
                 alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isshow: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {

        }
    },
    mounted () {

    }
}
</script>
<style scoped>
</style>


