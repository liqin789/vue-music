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
        <hr>
        <h2>动态组件</h2>
           <button @click="changePage(index)" v-for="(item,index) in list " :key="index">{{item.name}}</button>
        <keep-alive>
             <component v-bind:is="currentTabComponent"></component>
        </keep-alive>

    </div>
</template>

<script>
    import Content from "@/components/content"
    import News from "@/components/news.vue"
    import Ad from "@/components/ad.vue"
    export default {
        data() {
            return {
                colnum: 1,
                currentTabComponent:Content,
                list:[
                    {
                        name:'联系',
                        word:'Content'
                    },{
                        name:'新闻',
                        word:'News'
                    },{
                        name:'广告',
                        word:'Ad'
                    }
                ]

            };
        },
        methods: {
          changePage(index){//点击切换的时候，改变动态组件的内容
              //去掉字符串
              let arr =['Content','News','Ad'];
              this.currentTabComponent = arr[index];
          }
        },
        components:{
             News,
             Content,
             Ad
        },
        computed: {
            //使用计算属性 实时进行值的改变  动态组件使用component is的属性的分析
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


