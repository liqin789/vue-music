<template>
  <div>
    <el-table ref="table" :data="tableData" :height="tableHeight">
       <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div>
       当前的值:{{this.$store.state.count}}
       <el-button @click="changeV">改变</el-button>  
    </div>
    <div>
      <Child />
      <div>
      
        <Detail :list="[1,2,3]" id="111">
          <el-button type="success" slot="title">详情</el-button>
        </Detail>

        <hr/>

        <Detail :list="[4,5,6]" id="222">
          <el-button type="success" slot="title">说明</el-button>
        </Detail>

        <hr/>
        <div>
          <h2>动态组件</h2>
          <el-button @click="switchTab">动态组件</el-button>
          <component :is="curTable" :tableData="tableData"></component>
        </div>



      </div>
    </div>
  </div>

</template>  
<script>
import Child from "./Child"
import Slide from "./Slide"
// import Detail  from "./Detail"
import {myMix} from "./mixin"
import Vue from "vue"

import listTable from "./listTable"
import gridTable from "./gridTable"

const Detail = Vue.component('Detail', function (resolve) {
    setTimeout(function () {
        require(['./Detail.vue'], resolve)
    }, 3000);
});

export default {
  mixins:[myMix],
  components: {
    listTable,
    gridTable,
    Child,
    Slide,
    Detail,
    // Detail,//弹框组件 可以写自定义的插槽的形式  代码优化时候改写成，弹框内容不多时候有可能不会点击 
   //'Detail': () => import('./Detail')
  },
  filters: {

  },
  mounted() {
    this.getMixList()
    //mounted 组件挂载结束 mounted 显示子组件，然后是父组件
    console.log("parent mounted")
    //  this.$nextTick(function () {
    //         this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 50;
    //         // 监听窗口大小变化
    //         let self = this;
    //         window.onresize = function() {
    //             self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 50
    //         }
    //   })
    //数组的过滤

    var r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry','apple'];

    // 数组的去重的操作
    // 当前元素在数组中的索引唯一性 进行过滤的操作
    // 数组的过滤操作 将匹配的元素的进行过滤
    // 返回索引的唯一性  返回数组的唯一性
    r = arr.filter((item,index)=>{
        return arr.indexOf(item) == index
    })
    //返回需要的格式
    //console.log("r",r)


    //数组的reduce  [[0, 1], [2, 3], [4, 5]]
    // 将二维数组转化成以为数组的形式
    // reduce 包含的有前一项 后一项 初始值等
    let add = [[0, 1], [2, 3], [4, 5]]
    // 将数组的进行拆分  pre 有默认的值
    let re = add.reduce((pre,cur)=>{
        return pre.concat(cur)
    },[])

    //数组的每一项进行遍历
    // 数组的拼接行为 使用concat
    let rrr=[]
    add.forEach((item,index)=>{
       console.log(item)
       //... 展开运算符号 将数组或者对象进行展开
       rrr.push(...item)
    })


    //console.log('re',re)
    console.log('rrr',rrr)









    // 获取根组件 实例 获取根组件  获取根组件实例
    //console.log("options",this.$root.$options)

    //this.$el 获取的是跟组件实例
    // this.
    // console.log("el-dom",this.$el)

    // await 会把数据进行返回  await 会把数据返回
    // setTimeout(()=>{
    //   console.log("1")
    // },8000)

    //  setTimeout(()=>{
    //    //set timeOut  将执行添加到排队的队列 进程空闲的时候执行
    //    //异步队列 等浏览器空闲的时候 在执行
    //   console.log("2")
    // },9000)

    //this.getList()
    let curName = this.getTeeeName("3-2", this.TreeList)
    // for of 遍历  

    // Array.prototype.newArr = () => { };
    // Array.prototype.anotherNewArr = () => { };

    // 遍历数组 for in  遍历属性 for of  遍历值
    //const array = ['foo', 'bar', 'baz'];
    const array = {
      name: 'liqin',
      age: 12
    };

    // for (const value in array) {
    //   console.log(value);
    // }

    // for (const value of array) {
    //   console.log(value);
    // }


    // for in 遍历对象可以枚举的属性 可以打印继承的 它还从构造函数的原型中查找继承的非枚举属性，查找继承的非枚举属性
    // for in 遍历对象 遍历数组的索引   for of遍历值

    this.getTree()


    //将后台的菜单和前台的进行匹配，然后显示是哪些需要  async await


let menuList = [
      {
        pid: -1,
        name: '购物车',
        id: 1,
        auth: 'cart',
      },
      // {
      //   pid: 1,
      //   name: '购物车列表',
      //   id: 4,
      //   auth: 'cart-list',
      // },
      {
        pid: 4,
        name: '彩票',
        id: 5,
        auth: 'lottery',
      },
      {
        pid: 4,
        name: '商品',
        id: 6,
        auth: 'product',
      },
    ]

    // 将扁平的写成树形  使用映射的形式 使用映射的形式
    function getTreeList(menuList){
          let memu=[];// 渲染的菜单
          let routeMap={};//建立映射关系 id和pid之间的关系
          let auths =[];//是否是有权限 可以根据这个字段动态控制 路由的显示和不显示
          menuList.forEach(m => {// 遍历数组 
              auths.push(m.auth)
              m.children=[];
              routeMap[m.id]= m
              if(m.pid == -1){
                  memu.push(m)
              }else{
                /*
                  根据ID 作为对象的建明 建立映射关系 利用对象的简直对 建立映射表 id 
                 */
                if(routeMap[m.pid]){
                    routeMap[m.pid].children.push(m)
                }
              }
          });

          // 返回两个对象 使用一个对象进行包括
          return{
            memu,
            auths,
            routeMap
          }

    }

  let { memu,auths } = getTreeList(menuList)


  let authRoutes = [ // 权限
  {
    path: '/cart',
    name: 'cart',
    component: () => (<div>cart</div>),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => (<div>cart-list</div>),
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            component: () => (<div>lottery</div>),
          },
          {
            path: 'product',
            name: 'product',
            component: () => (<div>product</div>),
          },
        ],
      },
    ],
  },
]
    //将路由和包含的进行匹配 将匹配的路由添加到路由表中
    let newRoute;
    function formatList(authRoutes,auths){
      newRoute = authRoutes.filter((item,index)=>{
          if(auths.includes(item.name)){
             if(item.children && item.children.length){
                  // 使用递归进行过滤数组  使用递归进行过滤
                  item.children = formatList(item.children,auths)
             }
             return true
          }
      })
      return newRoute
    }
  },
  methods: {
    //切换动态组件
    switchTab(){
      //根据索引进行切换
      let arr =["listTable","gridTable"]
      let index = arr.indexOf(this.curTable)

      this.curTable = arr[index+1]


    },
    changeV(){
      // this.$store.commit("updateV",this.$store.state.count++)
      this.$store.commit("updateV",this.$store.state.count +=1)
    },
    //改变滑块的内容
    changeItem(val) {
      console.log("父组件，获得滑块内容", val)
    },
    //需求 树的查找子节点 使用【【递归】】或者【【广度遍历】】的方式 目的是查找当前的元素
    getTeeeName(id, data) {
      let cloneData = JSON.parse(JSON.stringify(data))
      // 使用栈进行数据的遍历 ，找元素，判断值，找到则返回，找不到 然后将子节点放进栈中索引增加
      let stack = [...cloneData] // 栈
      let index = 0;//数组的索引 遍历的索引的值 
      let current = null;// 当前的元素
      while (current = stack[index++]) {
        if (current.id == id) {
          break
        }
        if (current.children) {
          //有孩子节点，则进行压栈的操作 数组的合并的操作, 数组的压栈的操作，相当于是将深度的节点，变成扁平形
          stack = stack.concat(current.children)
        }
      }
      return current
    },

    handleData() {
      console.log("父组件中的函数")
    },

    // async await 获取异步数据 async  await 获得异步数据
    // async  await 获得异步数据 
    // 两个异步函数执行的先后舒顺序
    async getList() {
      // async  会等待程序加载结束  然后是执下边的数据  异步执行中 使用异步进行数据的获取
      //promise.then  一个接口成功调用另外的一个  一个接口成功时候调用两外的一个
      this.value = await this.fetchValue()
      this.options = await this.fetchData()
      // 可以同时执行放到数组中 引用更新
      // promise.then 

    },
    // async await(中返回的是一个promsise 对象)  await是一个promise  想使用await 需要返回一个promise
    // await 中返回是一个promise 对象
    fetchData() {
      return new Promise((res, rej) => {
        //可以是一个异步请求
        setTimeout(() => {
          res(
            [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }])
        }, 5000)
      })
    },

    fetchValue() {
      return new Promise((res, rej) => {
        //可以是一个异步请求
        setTimeout(() => {
          res('选项5')
        }, 6000)
      })
    },

    setChild(newArr, pid, item) {
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[j].id == pid) {
          newArr[j].children = newArr[j].children ? newArr[j].children : [];
          newArr[j].children.push(item);
        } else if (newArr[j].children) {
          this.setChild(newArr[j].children, pid, item)
        }
      }
    },

    getTree() {
      let newArr = []
      for (let i in this.menuList) {
        if (this.menuList[i].pid == -1) {
          newArr.push(this.menuList[i])
        }
        // 给元素添加后代元素
        this.setChild(newArr, this.menuList[i].pid, this.menuList[i])
      }
    }

  },
  data() {
    //返回函数，保证是私有的作用域的形式
    //使用children 的时候，当作是树形的组件，可以折叠和展开的形式，当然也可以自己进行数据的组装
    return {
      curTable:"listTable",
      tableHeight:50,
       tableData: [
         {
            date: '2016-05-02',
            name: '1王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }
         ,
         {
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
          },
          ],
      v: '2',
      newList: [
        {
          name: '新闻1',
          date: '2019-09-09'
        }, {
          name: '新闻2',
          date: '2018-08-08'
        }, {
          name: '新闻业务3',
          date: '2017-07-08'
        }
      ],
      curNum: 1,
      value: '',
      options: [],
      TreeList: [
        {
          id: "1",
          name: "1"
        },
        {
          id: "2",
          name: "2"
        },
        {
          id: "3",
          name: "3",
          children: [
            {
              id: '3-1',
              name: '3-1'
            },
            {
              id: '3-2',
              name: '3-2'
            },

          ]
        }, {
          id: '4',
          name: '4',
          children: [
            {
              id: '4-1',
              name: '4-1'
            },
          ]
        }
      ],
      treeData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      tableData: [
         {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },  {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, 
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}

</script>
