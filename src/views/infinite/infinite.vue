<template>
  <div>
    <el-row>
      <el-col :span="12">
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
            </tbody>
          </table>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div class="tree-table">
            <div class="first">序号</div>
            <div class="second">
              <el-checkbox v-model="checkAll"></el-checkbox>
              继承
            </div>
            <div class="item third">菜单</div>
            <div class="item fouth">按钮配置</div>
          </div>
          <el-tree :data="treeData"
                   node-key="id"
                   default-expand-all
                   :expand-on-click-node="false">
            <span class="custom-tree-node"
                  slot-scope="{ node, data }">

              <span class="left-index">{{data.index}}</span>

              <span>
                <el-checkbox v-model="treeChecked1"></el-checkbox>
              </span>

              <span @click="viewFn(node,data)">{{ node.label }}</span>

              <span>
                <span v-for="(innerChk,index) in node.data.checkArr"
                      :key="index">
                  <el-checkbox v-model="innerChk.chk"></el-checkbox>
                  {{innerChk.label}}
                </span>

                <!-- <el-button type="text"
                           size="mini"
                           @click="() => remove(node, data)">
                  Delete
                </el-button> -->
              </span>

            </span>
          </el-tree>
        </div>
        <div class="share-out">
          <div class="tree-title">
            <span class="selection"></span>
            <span class="title">菜单</span>
            <span class="thumbnail">按钮配置</span>
            <span class="share-btns">序号</span>
            <span class="sharing">继承</span>
          </div>


          <div>
            <vtable :tableData="tableData">
               <el-table-column
                    slot="date"
                    fixed
                    prop="date"
                    label="日期1"
                    width="180">
                </el-table-column>
            </vtable>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import btnCheckboxs from "./btnCheckboxs"
import vtable from "./vtable"
import axios from "axios"
export default {
  components: {
    btnCheckboxs,
    vtable
  },
  data() {
    const data = [{
      id: 1,
      label: '左侧菜单',
      children: [{
        id: 4,
        label: '我的',
        children: [{
          id: 9,
          label: '稿件',
          children: [
            {
              id: 12,
              label: '个人稿',
              children: [
                {
                  id: 15,
                  label: '使用',
                  checkArr: [
                    {
                      label: '审核',
                      chk: false
                    },
                    {
                      label: '送审',
                      chk: false
                    },
                    {
                      label: '改稿',
                      chk: false
                    }
                  ]
                },
                {
                  id: 16,
                  label: '流传'
                },
                {
                  id: 17,
                  label: '修改'
                },
                {
                  id: 18,
                  label: '新建'
                }
              ]
            },
            {
              id: 13,
              label: '已处理'
            },
            {
              id: 14,
              label: '回收站'
            },
          ]
        }]
      }]
    }];

    //广度遍历给数组添加索引
    function formatData(data) { //深度优先算法
      const stack = [...data]; //声明一个栈
      let Index = 0;
      while (stack.length > 0) {
        const first = stack.shift()
        first.index = Index++
        first.children && first.children.slice().reverse().forEach(child => stack.unshift(child));
      }
      console.log("data", data)
    }

    formatData(data)


    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      checkAll: false,
      treeChecked1: false,
      treeData: JSON.parse(JSON.stringify(data)),
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
    // tree 头部和 内容联动
    shareTreeScroll(event) {
      let treeHeader = document.getElementById("shareOutHeader");
      let scrollLeft = event.target.scrollLeft;
      treeHeader.scrollLeft = scrollLeft;
    },
    viewFn(node, data) {
      console.log(node, data)
    },
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
    },
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
  },
  mounted(){
    axios.get('http://172.22.26.165:8080/unisetup1/productType/list')
  .then(function (response) {
    console.log("productType",response);
  })
  .catch(function (error) {
    console.log(error);
  });
   
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
<style scoped lang="scss">
.tree-table {
  display: flex;
  border: 1px solid #333;
}
.item {
  border-right: 1px solid #333;
  flex: 1;
}
.first {
  border-right: 1px solid #333;
  width: 60px;
}
.second {
  border-right: 1px solid #333;
  width: 60px;
}

.custom-tree-node {
  // flex: 1;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  //  justify-content: space-between;
  // font-size: 14px;
  // padding-right: 8px;
}

//树形折叠表格
.tree-title {
  width: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.share-out .selection {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 48px;
  flex: 0 0 48px;
}
.share-out .title {
  /* flex: 1; */
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
.share-out .thumbnail {
  padding-left: 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 90px;
  flex: 0 0 90px;
  text-align: center;
  padding-right: 10px;
}
.share-out .share-btns,
.share-out .sharing {
  padding-left: 10px;
  width: 100px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100px;
  flex: 0 0 100px;
}
</style>