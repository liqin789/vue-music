<template>
    <div>
        <slot name="title"></slot>
        这是一个的详情介绍
    </div>
</template>
<script>
// 作用域插槽的使用
export default {
    name: 'ad',// 定义组件的名字
    data () {
        return {

        }
    }
}
</script>
<style scoped>
</style>

