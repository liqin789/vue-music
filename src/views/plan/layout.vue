<template>
    <div>
        <h2>实现多列布局</h2>
        <span>输入列数：</span>
        <el-input style="width:200px" v-model="colnum" placeholder="请输入内容"></el-input>
        <div class="wrap" :style="styleObject">
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
    
            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colnum: 1
            };
        },
        methods: {
            /*
                column-width 栏目宽度
    
                column-count 栏目列数
    
                column-gap   栏目距离
    
                column-rule  栏目间隔线
                * */
        },
        computed: {
            //使用计算属性 实时进行值的改变
            styleObject() {
                return {
                    color: "red",
                    "column-count": this.colnum, //实时获得列数进行展示
                };
            }
        },
        mounted() {}
    };
</script>

<style scoped>
    .wrap {
        column-count: 1;
        column-gap: 30px;
        column-rule: 1px solid #000;
    }
</style>


