<template>
     <el-table
                  :data="tableData"
                  style="width: 100%">
                  <slot name="date"></slot>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="580">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
</template>

<script>
export default {
  props:{
    tableData:{
      
    }
  },
  data(){
    return{

    }
  }
}
</script>