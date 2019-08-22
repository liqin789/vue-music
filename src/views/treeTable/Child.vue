<template>
  <div>
      <!-- <span style="color:red">子组件当前的值</span>{{value}} -->
      <span style="color:red">子组件当前的值</span>{{snycTest}}
      <el-button @click="changeVal">Change</el-button> 
    <div >
        <Item :treeData="treeData"/>
    </div>

  </div>
</template>
<script>
import Item from "./item"
export default {
  components: {
    Item
  },
  name: "Child",
  props: {
    value: {
      type:[String,Number]
    },
    snycTest:{
       type:[String,Number]
    },
    treeData: {
      type: [Array],
      default: () => []
    }
  },
  methods: {
    changeVal(){// 子组件更改父组件的数据，使用emit的形式 父子组件双向通信  v-model value this.$emit(input)
        // let _val = this.value;; // 父子组件双向通信
        // _val++
        // this.$emit("input",_val)

         let _val = this.snycTest;
         _val++
         this.$emit("update:snycTest",_val)



    },
   
  },
  data() {
    return {
      tempChild: null,
    }
  }
}
</script>
<style>
.tree-content {
  display: flex;
}
</style>