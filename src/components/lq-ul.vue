<!--
 * @Author: liqin
 * @Date: 2018-12-09 19:36:19
 * @Description: 定义一个全局的组件，然后让其他的页面进行调用
 -->
<template>
    <div>
        <ul>
            <li v-for='item in dataList'
                :key="item.id">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        dataList: {
            type: Array,
            required: true
        }
    },
    data () {
        return {

        }
    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style scoped>
ul > li {
    cursor: pointer;
    color: blue;
    background: #fff;
    font-size: 16px;
}
</style>


