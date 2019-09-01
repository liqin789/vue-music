<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      count: 10,
        loading: false
    }
  },
  methods:{
       load () {
        this.loading = true
        setTimeout(() => {
          console.log("loading...")
          this.count += 2
          this.loading = false
        }, 2000)
      }
  },
  computed:{
    //计算属性是一个函数 返回的值是计算属性的的值的形式我们在哪里呢  使用计算属性 实时进行值的获取
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
  }
}
</script>
<style lang="scss">
.infinite-list-wrapper{
  //滚动到底部的包装器对象 外包装器设置高度才能实现无线滚动的效果
  border: 1px solid #ddd;
  height: 350px;
}
.infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
}
.list-item +.list-item{
  //使用兄弟选择器 进行元素值的选取 使用兄弟选择器
  margin-top: 10px;
}
</style>