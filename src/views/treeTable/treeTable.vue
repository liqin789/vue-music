<template>
  <div class="treeTable">
    <el-table :data="tableData"
              style="width: 100%;margin-bottom: 20px;"
              row-key="id"
              border
              default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button type="text"
                     :d="scope.row"
                     size="small">查看</el-button>
          <el-button type="text"
                     size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <hr />
    <h2>实现递归组件</h2>
    <Child :treeData="treeData"/>
      <hr />
      <span>两个接口模拟下拉组件</span>
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
  </div>
</template>  
<script>
import Child from "./Child"
export default {
  components: {
    Child
  },
   mounted(){
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

    this.getList()
    let curName = this.getTeeeName("3-2",this.TreeList)
    console.log(curName)
  },
  methods:{
      //需求 树的查找子节点 使用【【递归】】或者【【深度遍历】】的方式 目的是查找当前的元素
      getTeeeName(id,data){
          let cloneData = JSON.parse(JSON.stringify(data))
          // 使用栈进行数据的遍历 ，找元素，判断值，找到则返回，找不到 然后将子节点放进栈中索引增加
          let stack =[...cloneData] // 栈
          let index = 0 ;//数组的索引 遍历的索引的值 
          let current = null;// 当前的元素
          while(current = stack[index++]){
              if(current.id == id){
                break
              }
              if(current.children){
                  //有孩子节点，则进行压栈的操作 数组的合并的操作, 数组的压栈的操作，相当于是将深度的节点，变成扁平形
                  stack=  stack.concat(current.children)
              }
          }
          return  current
      },




    // async await 获取异步数据 async  await 获得异步数据
    // async  await 获得异步数据 
    // 两个异步函数执行的先后舒顺序
    async getList(){
      // async  会等待程序加载结束  然后是执下边的数据  异步执行中 使用异步进行数据的获取
      //promise.then  一个接口成功调用另外的一个  一个接口成功时候调用两外的一个
       this.value = await this.fetchValue()
       this.options = await this.fetchData()
      // 可以同时执行放到数组中 引用更新
      // promise.then 

    },
     // async await(中返回的是一个promsise 对象)  await是一个promise  想使用await 需要返回一个promise
     // await 中返回是一个promise 对象
      fetchData(){
          return new Promise((res,rej)=>{
              //可以是一个异步请求
              setTimeout(()=>{
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
              },5000)
          })
      },

       fetchValue(){
          return new Promise((res,rej)=>{
              //可以是一个异步请求
              setTimeout(()=>{
                 res('选项5')
              },6000)
          })
      },


  },
  data() {
    //返回函数，保证是私有的作用域的形式
    //使用children 的时候，当作是树形的组件，可以折叠和展开的形式，当然也可以自己进行数据的组装
    return {
      value:'',
      options:[],
      TreeList:[
          {
            id:"1",
            name:"1"
          },
          {
            id:"2",
            name:"2"
          },
           {
            id:"3",
            name:"3",
            children:[
              {
                id:'3-1',
                name:'3-1'
              },
              {
                id:'3-2',
                name:'3-2'
              },

            ]
          },{
            id:'4',
            name:'4',
            children:[
               {
                id:'4-1',
                name:'4-1'
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
      tableData: [{
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
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 331,
            date: '2016-05-331',
            name: '王小虎33',
            address: '33上海市普陀区金沙江路 1519 弄'
          }]
        }]
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