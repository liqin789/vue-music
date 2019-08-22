<template>
  <div>

    <div >
        <Item :treeData="treeData"/>
    </div>

  </div>
</template>
<script>
import Item from "./item"
console.log(Item)
export default {
  components: {
    Item
  },
  name: "Child",
  props: {
    treeData: {
      type: [Array],
      default: () => []
    }
  },
  methods: {
   
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