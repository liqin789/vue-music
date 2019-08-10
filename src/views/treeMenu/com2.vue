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

