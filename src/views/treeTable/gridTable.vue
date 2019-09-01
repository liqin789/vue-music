<template>
  <ul>
    <li v-for="item in tableData" :key="item">
      <span>date:{{item.date}}</span>|
      <span>name:{{item.name}}</span>|
      <span>address:{{item.address}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name:'gridTable',
  props:{
    tableData:{}
  },
  data(){
    return{

    }
  }
}
</script>