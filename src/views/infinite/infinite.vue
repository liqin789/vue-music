<template>
  <div>
    <div class="infinite-list-wrapper"
         style="overflow:auto">
      <ul class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="i in count"
            class="list-item"
            :key="i">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <hr />
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>序号</th>
            <th>继承</th>
            <th>分类</th>
            <th>组稿视图--按钮配置</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in buttonTable"
              :key="index">
            <td>{{item.num}}</td>
            <td>
              <el-checkbox v-model="item.inheritCheck"></el-checkbox>
            </td>
            <td>{{item.classify}}</td>
            <td>
              <btnCheckboxs :options="item.Options"
                            :selOptions="item.SelOptions"
                            @getOptionsVal="getOptionsVal"></btnCheckboxs>
            </td>
          </tr>
          <!-- <tr>
            <td>2</td>
            <td>
              <el-checkbox v-model="checked2"></el-checkbox>
            </td>
            <td>新建</td>
            <td>
              <btnCheckboxs :options="secondOptions"
                            :selOptions="secondSelOptions"
                            @getOptionsVal="getOptionsVal"></btnCheckboxs>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>

  </div>

</template>
<script>
import btnCheckboxs from "./btnCheckboxs"
export default {
  components: {
    btnCheckboxs
  },
  data() {
    return {
      checked1: '',
      checked2: '',
      count: 10,
      loading: false,
      buttonTable: [
        {
          num: 1,//序号
          inheritCheck: "",//继承
          classify: '使用',//分类
          SelOptions: ['审核', '送审稿'],//选中值
          Options: ['签发', '撤稿（未定）', '审核', '送审稿', '改稿', '审定（1）'],//所有值
        },
        {
          num: 2,
          inheritCheck: '',
          classify: '新建',
          SelOptions: ['刷新', '分享'],
          Options: ["刷新", "预览 ", "关闭", "分享", "打印"],
        }
      ],
      // firstSelOptions: ['审核', '送审稿'],
      // firstOptions: ['签发', '撤稿（未定）', '审核', '送审稿', '改稿', '审定（1）'],
      // secondSelOptions: ['刷新', '分享'],
      // secondOptions: ["刷新", "预览 ", "关闭", "分享", "打印"],

    }
  },
  methods: {
    //获得子组件的值
    getOptionsVal(val) {
      console.log("val", val)
    },
    // 元素组件的思路 组件的嵌套 将组件最小化 最小化的渲
    load() {
      this.loading = true
      setTimeout(() => {
        console.log("loading...")
        this.count += 2
        this.loading = false
      }, 2000)
    }
  },
  computed: {
    //计算属性是一个函数 返回的值是计算属性的的值的形式我们在哪里呢  使用计算属性 实时进行值的获取
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  }
}
</script>
<style lang="scss">
.infinite-list-wrapper {
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
.list-item + .list-item {
  //使用兄弟选择器 进行元素值的选取 使用兄弟选择器
  margin-top: 10px;
}
</style>
<style scoped>
table,
td {
  /* border: 1px solid #333; */
}

thead,
tfoot {
  /* background-color: #333; */
  /* color: #fff; */
}
</style>