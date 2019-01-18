<template>
    <div>

        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>

                <span>数量</span>
                <span>{{count}}</span>

                <br />
                <v-tree ref='tree'
                        :data='treeData'
                        :multiple='true'
                        @node-click="getSelectedNodes"
                        @node-check="getCheckedNodes2"
                        :halfcheck='true' />

                <br />

                <h2>promise的异步回调的使用使用场景，元素的下拉的，编辑的时候，需要显示默认的下拉的值，
                    <br />
                    然而ajax是异步的程序并不知道，请求下拉数据和请求编辑参数的先后99999</h2>

                <el-button @click="getSelectText">获得选中的值</el-button>

                <el-select v-model="value"
                           placeholder="请选择">
                    <el-option v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>

                <hr>
                <h2>A-b-C组件之间的通信</h2>
                <Child1 :menuData="menuData"
                        v-on:getC="getC">
                    <div slot="title">A标题弹框</div>
                </Child1>
            </el-col>
            <el-col :span="12">
                <div>
                    调取本地的相机和摄像头并回显示到页面中
                </div>

                <input type="file"
                       accept="image/*" />

                <img :src="resultUrl"
                     style="width:50%;height:auto"
                     alt="">

            </el-col>

        </el-row>

    </div>
</template>
<script>
import { mapState } from 'vuex'
import { setTimeout } from 'timers';
import Child1 from "./component/Child1"

export default {
    data () {
        return {
            resultUrl: '',
            menuData: [
                {
                    id: 1,
                    name: 'liqin'
                }, {
                    id: 2,
                    name: 'zhangsan'
                }
            ],
            name: '',
            value: '',
            options: [],
            searchword: '',
            treeData: [
                {
                    title: 'node1',
                    expanded: true,
                    id: 12,
                    children: [{
                        title: 'node 1-1',
                        expanded: true,
                        children: [{
                            title: 'node 1-1-1',
                            children: [{
                                title: 'node 1-1-1-1',
                            }]
                        }, {
                            title: 'node 1-1-2'
                        }, {
                            title: 'node 1-1-3'
                        }]
                    },
                    {
                        title: 'node 1-2',
                        expanded: true,
                        children: [{
                            title: "<span style='color: red'>node 1-2-1</span>"
                        }, {
                            title: "<span style='color: red'>node 1-2-2</span>"
                        }]
                    }]
                }],
            treeData2: [
                {
                    title: 'node2',
                    expanded: true,
                    id: 12,
                    children: [{
                        title: 'node 2-1',
                        expanded: true,
                        children: [{
                            title: 'node 2-1-1',
                            children: [{
                                title: 'node 2-1-1-1',
                            }]
                        }, {
                            title: 'node 2-1-2'
                        }, {
                            title: 'node 2-1-3'
                        }]
                    },
                    {
                        title: 'node 2-2',
                        children: [{
                            title: "<span style='color: red'>node 2-2-1</span>"
                        }, {
                            title: "<span style='color: red'>node 2-2-2</span>"
                        }]
                    }]
                }]
        }
    },
    mounted () {
        //使用promise 控制程序的执行的步骤  
        this.getSelectData().then((data) => {
            this.getEditInfo();
        })


    },
    components: {
        Child1
    },
    computed: {
        ...mapState({
            count: "count"
        })
    },
    methods: {
        uploadImg (e) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                this.resultUrl = e.target.result
            };
        },
        getSelectText () {
            let userSelection = "";
            if (window.getSelection) {//一般浏览器
                userSelection = window.getSelection();
            } else if (document.selection) {
                userSelection = document.selection.createRange();
            }
            var strInput = "";
            try {
                strInput += " " + userSelection.toString();
            } catch (e) {//I兼容IE
                strInput += " " + userSelection.text;
            }
            console.log('userSelection', userSelection.toString())

        },
        getC (data) {
            console.log("我在A组件,监听C组件的触发的函数,并得到C传递的值", data)
        },
        getEditInfo () {//获得编辑信息
            console.log("seconed")
            setTimeout(() => {
                this.value = 3
            }, 500)
        },
        getSelectData () {//获得下拉数据,放到promise的resolve的里面
            console.log("first")
            return new Promise((resolve, reject) => {
                setTimeout(() => {//使用settimeout模拟ajax请求数据
                    let data = [
                        {
                            value: 1,
                            label: '篮球'
                        },
                        {
                            value: 2,
                            label: '足球'
                        },
                        {
                            value: 3,
                            label: '排球'
                        }
                    ]
                    this.options = data;
                    resolve(data)
                }, 1000)
            })

        },
        getSelectedNodes (val) {
            console.log(val)
        },
        getCheckedNodes2 (obj, bool) {
            //alert("ok")
            console.log(obj)
            console.log(bool)
        },
        getNodes (val) {
            console.log(val)
        }

    }
}
</script>
<style>
.a {
    border: 1px solid #e3e8f1;
}
</style>


