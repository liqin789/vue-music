<template>
    <div class="img_wap">
        <img :src="src" />
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
        },
    },
    data () {
        return {

        }
    },
    methods: {

    },
    mounted () {

    }
}
</script>

<style scoped>
.img_wap {
    padding-bottom: 56%;
    width: 100%;
    position: relative;
}
.img_wap img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>


