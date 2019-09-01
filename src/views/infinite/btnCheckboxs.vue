<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate"
                 v-model="checkAll"
                 @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities"
                       :value="checkedCities"
                       @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities"
                   :label="city"
                   :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'btnCheckboxs',
  props: {
    options: {
      type: Array
    },
    selOptions: {
      type: Array,
    },
  },
  data() {
    return {
      checkedCities: [],
      cities: this.options,
      checkAll: false,
      isIndeterminate: true
    }
  },
  mounted() {
    //父组件传递value 作为子组件的v-model值
    this.checkedCities = JSON.parse(JSON.stringify(this.selOptions))
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.options : [];
      this.isIndeterminate = false;
      // 这儿必须用input 发送数据，发送的数据会被父级v-model=“test”接受到，再被value=test传回来。
      //数据同步
      this.$emit('getOptionsVal', this.checkedCities)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      this.$emit('getOptionsVal', this.checkedCities)
    },
  }

}
</script>
<style scoped lang="scss">
</style>