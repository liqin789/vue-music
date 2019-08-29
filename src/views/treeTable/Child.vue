<template>
  <div>
   

    <div>
       当前的值:{{this.$store.state.count}}
       <el-button @click="changeV">改变</el-button>  
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
    },
    handleData:{
      type:Function
    }
  },
  mounted(){
     console.log("son mounted")
  },
  methods: {
     changeV(){
       // vux 相当于是数据仓库 vuex 相当于是数据的仓库 保证里面的数据源的统一性 一处更改 其他的地方都会更改
       // 可以实现父子组件的双向的数据的绑定 
      this.$store.commit("updateV",this.$store.state.count +=1)
    },
    changeVal(){// 子组件更改父组件的数据，使用emit的形式 父子组件双向通信  v-model value this.$emit(input)
        // let _val = this.value;; // 父子组件双向通信
        // _val++
        // this.$emit("input",_val)

         let _val = this.snycTest;
         _val++
         this.$emit("update:snycTest",_val)

        // 在子组件中调用父组件的方法 
         this.handleData()
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