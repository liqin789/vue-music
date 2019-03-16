<!--
 * @Author: liqin
 * @Date: 2018-12-09 19:36:19
 * @Description: 
 -->
<template>
    <div>
        <el-row>
            <el-col :span="12">
                <h2 class="title">组件的递归</h2>
                <lq-tree :dataList="dataList"></lq-tree>
                <!-- <ul>
                <li>
                    <span>1</span>
                    <ul>
                        <li>
                            <span>1-1</span>
                        </li>
                        <li>
                            <span>1-2</span>
                        </li>
                    </ul>
                </li>
            </ul> -->

                <hr>
                <h2 class="title">
                    <span>使用全局的组件</span> </h2>
                <lq-ul :dataList="dataList"></lq-ul>

                <Ad>
                    <h1 slot="title">计划1</h1>
                </Ad>
            </el-col>
            <el-col :span="12">
                <h2 class="title"> <span>实现动态的渲染列</span> </h2>
                <el-table :data="tableData"
                          border
                          style="width: 100%">
                    <!-- <el-table-column prop="date"
                                     label="日期"
                                     width="180">
                    </el-table-column>
                    <el-table-column prop="name"
                                     label="姓名"
                                     width="90">
                    </el-table-column>
                    <el-table-column prop="address"
                                     label="地址">
                    </el-table-column> -->

                    <el-table-column :label="item.label"
                                     :key="index"
                                     :prop="item.prop"
                                     resizable
                                     v-for="(item,index) in tableKeys"
                                     :width="item.width">
                        <template slot-scope="scope">
                            <span>{{scope.row[`${item.prop}`]}}</span>
                        </template>
                    </el-table-column>

                </el-table>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Vue from "vue"
import Ad from "@/components/ad.vue"
// 定义一个名 lq-tree 的新数组件 先把静态页面布局结构 写出来，然后用真实的数据就行替换静态的数据
// 学会使用递归进行数据的渲染，减少代码的重复的使用 
//使用 template模版标签可以渲染出一个空的标签  用于循环和减少页面之间的嵌套  必选层级较多 
//使用v-if 判断是否还有子元素，有的情况下 使用递归进行嵌套
Vue.component('lq-tree', {
    data: function () {
        return {
            count: 0,
        }
    },
    props: ['dataList'],
    template: ` <ul>
                      <li v-for='item in dataList'>
                         <span>{{item.name}}</span>
                            <template v-if="item.child">
                                <lq-tree :dataList='item.child'>
                                </lq-tree>
                            </template>
                      </li>
                    </ul>
                       `
})

export default {
    data () {
        return {
            //实现动态的渲染列  动态数据和表头信息
            tableKeys: [
                { 'id': 1, 'label': '日期', 'width': '180', 'prop': 'date' },
                { 'id': 2, 'label': '姓名', 'width': '90', 'prop': 'name' },
                { 'id': 3, 'label': '地址', 'prop': 'address' },
            ],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎4',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
            ,
            dataList: [{
                id: '1',
                name: '1组件',
                child: [{
                    id: "1-1",
                    name: '1-1'
                },
                {
                    id: "1-2",
                    name: '1-2'
                }
                ]
            },
            {
                id: '2',
                name: '2组件',
                child: [{
                    id: "2-1",
                    name: '2-1'
                },
                {
                    id: "2-2",
                    name: '2-2',
                    child: [{
                        id: "2-2-1",
                        name: '2-2-1'
                    },
                    {
                        id: "2-2-2",
                        name: '2-2-2'
                    },
                    {
                        id: "2-2-3",
                        name: '2-2-3'
                    }
                    ]
                }
                ]
            }

            ]
        }
    },
    components: {
        Ad
    },
    mounted () {
        var result = this.getNum(6);
        console.log(result)
    },
    methods: {
        /**
         * @description: 获得函数的阶乘 5!= 5*4*3*2*1
         * @param {type}  num
         * @return: result 
         */
        getNum (num) {
            if (num == 1) {
                return 1
            }
            return num * this.getNum(num - 1)
        }
    }
}
</script>

<style scoped lang='scss'>
ul > li {
    cursor: pointer;
}
.title {
    span {
        color: rgb(255, 47, 144);
    }
}
</style>


