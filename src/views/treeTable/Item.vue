<template>
  <div class="tree-content">

    <div class="left">
      <div v-for="(item,index) in treeData"
           :key="index">
        <span @click="change(item)">{{item.label}}</span>
      </div>
    </div>

    <div class="right"
         v-if="lists && lists.length">
      <Item :treeData="lists" />
      <!-- 实现递归组件 -->
      <!-- <div v-for="(item,index) in lists"
           :key="index">
        <span>{{item.label}}</span>
      </div> -->

    </div>

  </div>
</template>
<script>
export default {
  name: "Item",
  props: {
    treeData: {
      type: [Array],
      default: () => []
    }
  },
  computed: {
    lists() {
      return this.tempChild
    }
  },
  data() {
    return {
      tempChild: null,
    }
  },
  methods: {
    change(item, index) {
      this.tempChild = item.children ? item.children : []
    }
  }
}
</script>
<style lang="scss">
.content {
  //display: flex
}
</style>