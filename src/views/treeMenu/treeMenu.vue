<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 14:57:29
 * @LastEditTime: 2019-08-12 14:57:29
 * @LastEditors: your name
 -->
<template>
  <div>
    <el-input placeholder="输入关键字进行过滤"
              v-model="filterText">
    </el-input>
    <el-tree class="filter-tree"
             :data="treeData"
             :expand-on-click-node="false"
             node-key="id"
             :props="defaultProps"
             :filter-node-method="filterNode"
             @node-expand="nodeExpand"
             show-checkbox
             ref="tree">
      <span class="custom-tree-node"
            slot-scope="{ node }">
        <span>
          {{ node.label }}</span>
      </span>
    </el-tree>
    <hr />
    <div>
      <el-button @click="refshParent">改变子页面值,并刷新父页面</el-button>
    </div>
    <hr />
    <h2>动态组件形式</h2>
    <template>
      <el-radio-group v-model="radio"
                      @change="changeCom">
        <el-radio label="com1">动态组件一</el-radio>
        <el-radio label="com2">动态组件二</el-radio>
      </el-radio-group>

      <keep-alive>
        <component v-bind:is="currentTabComponent"
                   :comOptions="comOptions">
          <div>
            wewe
          </div>
        </component>
      </keep-alive>

    </template>

  </div>
</template>
<script>
import com1 from "./com1"
import com2 from "./com2"
export default {
  components: {
    com1,
    com2
  },
  data() {
    return {
      comOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      radio: 'com1',
      currentTabComponent: com1,//动态组件渲染
      filterText: '',
      treeData: [
        {          "catgLevel": 1, "catlogId": "1",
          "chkDisabled": false,
          "id": "c2000104", "isParent": true,
          "isRoot": true, "name": "中文", "pId": "c02706",        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  methods: {
    // 切换动态组件 动态组件可以应用到选项卡中，进行切换选项卡的形式
    changeCom() {
     // console.log(this.radio)
      this.currentTabComponent = this.radio
    },
    refshParent() {
      //window.opener  是父窗口的对象 子页面向父窗口通信
      window.opener.postMessage("Message to parent", "*");
    },
    addChildren(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].isParent) {
          if (!arr[i].children) {
            this.$set(arr[i], 'children', []);
          }
          const newChild = { id: Math.random(), name: '', children: [] };
          arr[i].children.push(newChild);
        }
      }
    },
    //模拟请求ajax获得下级数据
    getNextTree(id, obj) {
      //每次点击一个展开时候，得到操作的id,发送ajax请求，然后将返回的数组，赋予给操作节点元素的children  
      // axios.post('/getTree', {
      //   id: id,
      // })
      //   .then(function (res) {
      //     obj.children = res.data
      //   })
      // 模拟假数据
      obj.children = [{ "catgLevel": 2, "catlogId": "1", "chkDisabled": false, "id": "c20001001", "isParent": true, "isRoot": false, "name": "综合检索库", "pId": "c02706" }]
      //主动添加一个占位
      this.addChildren(obj.children)
    },
    //点击一级获得下一级数据 默认加载 点击时候，判断是否是isParent = true  则默认增加一级，点击时候在发送ajax请求
    //步骤1 当我点击第一级 中文（可以看到综合检索库第二级）：
    nodeExpand(obj, node, self) {
      let _id = obj.id
      this.getNextTree(_id, obj)
    },
    //节点过滤
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  mounted() {
    //树节点 如果属性isParent = true  默认添加children可以点击
    this.addChildren(this.treeData)
    // 数组的reduce 方法


  },


};
</script>
<style>
</style>


