<template>
  <div>
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
    <h2>实现父子组件双向绑定</h2>
    <Child />
  </div>
</template>  
<script>
import Child from "./Child"
export default {
  components: {
    Child
  },
  data() {
    //返回函数，保证是私有的作用域的形式
    //使用children 的时候，当作是树形的组件，可以折叠和展开的形式，当然也可以自己进行数据的组装
    return {
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