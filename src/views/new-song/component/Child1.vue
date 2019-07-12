<template>
    <div>
        <div>我是B组件</div>
        <el-button type="text"
                   @click="showDialog">
            <slot name="title"></slot>
        </el-button>

        <Child2 v-bind="$attrs"
                :dialogVisible="dialogVisible"
                v-on:closeFn="closeFn"
                v-on="$listeners"></Child2>

    </div>
</template>
<script>
import Child2 from "./Child2"
export default {
    props: {

    },
    components: {
        Child2
    },
    inheritAttrs: false,
    data () {
        return {
            dialogVisible: false
        }
    },
    computed: {

    },
    methods: {
        showDialog () {
            this.dialogVisible = true
        },
        closeFn () {
            this.dialogVisible = false
        }
    }
}
</script>
<style lang="scss" scoped>
</style>


