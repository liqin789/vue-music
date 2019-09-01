<template>
  <div>
    这是动态组件1
    <el-select v-model="value"
               placeholder="请选择">
      <el-option v-for="item in comOptions"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'com1',
  props: {
    comOptions: {
      type: [Object, Array]
    }
  },
  mounted(){
    console.log("组件1加载")
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

