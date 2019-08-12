<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 10:41:02
 * @LastEditTime: 2019-08-09 10:41:02
 * @LastEditors: your name
 -->
<template>
  <div>
    2222这是动态组件
    <ul>
      <li v-for="item in comOptions"
          :key="item.value">{{item.label}}</li>
    </ul>
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
  data() {
    return {
      value: ''
    }
  }
}
</script>

