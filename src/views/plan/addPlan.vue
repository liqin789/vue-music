<template>
    <div>
        <h2>组件的递归</h2>
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
    </div>
</template>
<script>
import Vue from "vue"
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
                        <lq-tree :dataList='item.child'></lq-tree>
                     </template>
                  </li>
                </ul>
                   `
})

export default {
    data () {
        return {
            dataList: [
                {
                    id: '1',
                    name: '1',
                    child: [
                        {
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
                    name: '2',
                    child: [
                        {
                            id: "2-1",
                            name: '2-1'
                        },
                        {
                            id: "2-2",
                            name: '2-2',
                            child: [
                                {
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
    methods: {

    }
}
</script>
<style scoped>
ul > li {
    cursor: pointer;
}
</style>


