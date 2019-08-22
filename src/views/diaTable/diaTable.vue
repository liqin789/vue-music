<!--
 * @Description: In User Settings Editon
 * @Author: your name
 * @Date: 2019-08-01 21:37:11
 * @LastEditTime: 2019-08-12 11:12:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id='only'>

    <div style="display:flex;justify-content:space-between">
      <div>12121</div>
      <div>565656</div>
    </div>
    <el-button type="text"
               @click="dialogVisible1 = true">点击打开 Dialog弹框的形式</el-button>
    <el-dialog title="提示"
               :visible.sync="dialogVisible1"
               width="30%">
      <span>这是一段信息</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-button @click="add">新增用户</el-button>
    <br />
    <div>
      <span>类型</span>
      <el-radio-group v-model="radio"
                      @change="changeRadio">
        <el-radio :label="3">单选</el-radio>
        <el-radio :label="6">多选</el-radio>
      </el-radio-group>
    </div>
    <div>
      已选用户:
      <el-tag v-for="tag in multipleTag"
              :key="tag.name"
              @close="handleClose(tag)"
              closable>
        {{tag.name}}
      </el-tag>
    </div>
    <!-- 列表弹框 start -->
    <template>
      <el-dialog title="提示"
                 :visible.sync="dialogVisible"
                 width="30%">
        <el-button @click="submit">确定</el-button>
        <el-button @click="dialogVisible = false">关闭</el-button>
        {{radio}}
        <el-table :data="gridData"
                  v-if="tableVisible"
                  @selection-change="handleSelectionChange">
          <el-table-column label="选择"
                           v-if="radio == '3'"
                           width="50"
                           align="center">
            <template slot-scope="scope">
              <el-radio class="radio"
                        v-model="tableradio"
                        @change.native="getTemplateRow(scope.$index,scope.row)"
                        :label="scope.$index">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column type="selection"
                           v-if="radio == '6'"
                           width="55"></el-table-column>
          <el-table-column property="date"
                           label="用户账号"
                           width="150"></el-table-column>
          <el-table-column property="name"
                           label="姓名"
                           width="200"></el-table-column>
        </el-table>

      </el-dialog>
    </template>
    <!-- 列表弹框 end -->
    <hr />

    <template>
      <el-table :data="gridData"
                height="150px"
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
        <div slot="append"
             style="text-align: center">
          <!--在此处添加你想要插入在表格最后一行的内容-->
          <el-button @click="loadMore">加载更多</el-button>
        </div>
      </el-table>
    </template>

    <el-input placeholder="输入关键字进行过滤"
              @input="changeFn"
              v-model="filterText">
    </el-input>
    <el-tree class="filter-tree"
             :data="data"
             node-key="id"
             :props="defaultProps"
             :default-expand-all="defaultExpand"
             :default-expanded-keys="expandedKeys"
             show-checkbox
             ref="tree">
      <span class="custom-tree-node"
            slot-scope="{ node }">
        <span :id="node.label">{{ node.label }}</span>
      </span>
    </el-tree>

    <hr />
    <div>
      <h2>vue-router打开新的页面，子页面改变，触发父页面进行更新</h2>
    </div>
    <el-button @click="goRouter">打开新页面</el-button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      title: `<font color="red">2</font>`,
      dialogVisible1: false,
      radio: 6,
      tableradio: '',
      multipleSelection: [],
      multipleTag: [],
      dialogVisible: false,
      tableVisible: true,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1518 弄'
      }],

      filterText: '',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            },
            {
              id: 337,
              label: '二级 3-1'
            }, {
              id: 3338,
              label: '二级 3-2'
            }, {
              id: 7333,
              label: '二级 3-1'
            }, {
              id: 83333,
              label: '二级 3-2'
            }, {
              id: 7222,
              label: '二级 3-1'
            }, {
              id: 23238,
              label: '二级 3-2'
            }, {
              id: 23237,
              label: '二级 3-1'
            }, {
              id: 12128,
              label: '二级 3-2'
            }, {
              id: 12127,
              label: '二级 3-1'
            }, {
              id: 31218,
              label: '二级 3-2'
            }, {
              id: 7234,
              label: '二级 3-1'
            }, {
              id: 677,
              label: '二级 3-1'
            }, {
              id: 67678,
              label: '二级 3-2'
            }, {
              id: 4547,
              label: '二级 3-1'
            }, {
              id: 5768,
              label: '二级 3-2'
            }, {
              id: 6767,
              label: '二级 3-1'
            }, {
              id: 8676,
              label: '二级 3-2'
            }, {
              id: 3438,
              label: '二级 3-2'
            }, {
              id: 73434,
              label: '二级 3-1'
            }, {
              id: 345238,
              label: '二级 3-2'
            }, {
              id: 2327,
              label: '二级 3-1'
            }, {
              id: 84234,
              label: '二级 3-2'
            }, {
              id: 9444,
              label: '二级 3-3'
            }, {
              id: 134340,
              label: '二级 3-4',
              children: [{
                id: 343411,
                label: '三级 4-1',
              },
              {
                id: 134342,
                label: '手机',
              },
              {
                id: 1121213,
                label: '三级 4-2',
              }]
            }]
        },
        {
          id: 124,
          label: '一级 4',
          children: [{
            id: 47312,
            label: '二级 4-1'
          }, {
            id: 48,
            label: '二级 4-2'
          },
          {
            id: 49,
            label: '二级 4-3'
          }, {
            id: 5890,
            label: '二级 4-4',
            children: [{
              id: 531231,
              label: '三级 4-1',
            },
            {
              id: 52,
              label: '手机1',
            },
            {
              id: 53,
              label: '三级 4-2',
            }]
          }]
        },

        {
          id: 598,
          label: '一级 5',
          children: [{
            id: 531237,
            label: '二级 4-1'
          }, {
            id: 57878,
            label: '二级 4-2'
          }]
        }
        ,
        {
          id: 6,
          label: '一级 6',
          children: [{
            id: 63127,
            label: '二级 4-1'
          }, {
            id: 67878,
            label: '二级 4-2'
          }]
        }
        ,
        {
          id: 76456,
          label: '一级 6',
          children: [{
            id: 731237,
            label: '二级 4-1'
          }, {
            id: 74568,
            label: '电脑'
          }]
        }
        ,
        {
          id: 8645,
          label: '一级 8',
          children: [{
            id: 83127,
            label: '二级 4-1'
          }, {
            id: 86548,
            label: '二级 4-2'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      expandedKeys: [],
      findId: '',//过滤的id
      findLabel: '',//过滤的名字
      defaultExpand: false
    }
  },
  mounted() {
    window.addEventListener('message', (e) => {
      //监听子页面，传递的消息，在父页面可以执行相应的功能 也可以将信息传递到其他的页面中
      // 使用postMessage 进行页面之间的通信 实现页面之间的通信
      console.log(e.data)
      this.getList()
    }, false);
    console.log(document.getElementById("only"))

    //设置选中可展开
    this.$refs.tree.setCheckedKeys([74568])
    //this.$refs.tree.setCheckedKeys([74568])
    //将数据进行展开的形式
    //将数据进行展开的形式
    // 将所有的数据进行展开的形式 
    this.expandedKeys = [74568]
  },
  methods: {
    getList() {
      console.log("父窗口中的函数")
    },
    goRouter() {
      const { href } = this.$router.resolve({
        name: "treeMenu",
        query: {
          id: "1212"
        }
      });
      window.open(href, '_blank');
    },
    // 使用递归和for循环或者 同时使用会造成浪费
    findText(data) {
      if (!!this.findId) {
        return
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].label == this.filterText) {
          this.findId = data[i].id
          this.findLabel = data[i].label
          break
        } else if (!this.findId) {
          data[i].children && data[i].children.length > 0 && this.findText(data[i].children)
        }
      }
      return
    },
    changeFn() {
      //this.filterText
      this.findId = ""
      this.findLabel = ""
      this.findText(this.data)
      if (!!this.findId) {
        this.$refs.tree.setCheckedKeys([this.findId])
        this.expandedKeys = [this.findId]
        setTimeout(() => {
          document.getElementById(this.findLabel) && document.getElementById(this.findLabel).scrollIntoView()
        }, 300)
      }
      if (this.findId == '') {
        this.defaultExpand = false;
        for (var i = 0; i < this.$refs.tree.store._getAllNodes().length; i++) {
          this.$refs.tree.store._getAllNodes()[i].expanded = this.defaultExpand;
        }
        this.$refs.tree.setCheckedKeys([]);
      }
    },
    add() {
      this.dialogVisible = true
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    changeRadio(val) {
      this.tableVisible = false
      this.$nextTick(() => {
        this.tableVisible = true
      })
      this.multipleTag = []
    },
    getTemplateRow(index, row) {
      this.multipleSelection = []
      this.multipleSelection.push(row)
    },
    submit() {
      this.multipleTag = JSON.parse(JSON.stringify(this.multipleSelection))
      this.dialogVisible = false
    },
    handleClose(tag) {
      this.multipleTag.splice(this.multipleTag.indexOf(tag), 1);
    },
    loadMore() {
      let newItem = JSON.parse(JSON.stringify(this.gridData[0]))
      for (let i = 0; i < 10; i++) {
        this.gridData.push(newItem)
      }
    }
  }
}
</script>

<style>
</style>

