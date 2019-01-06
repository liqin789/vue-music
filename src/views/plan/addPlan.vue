<!--
 * @Author: liqin
 * @Date: 2018-12-09 19:36:19
 * @Description: 
 -->
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

        <hr>
        <h2>使用全局的组件</h2>
        <lq-ul :dataList="dataList"></lq-ul>

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

<style scoped>
ul > li {
    cursor: pointer;
}
</style>


