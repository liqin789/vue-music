<template>
    <div>
        <span>数量</span>
        <span>{{count}}</span>
        
        <br/>
          <v-tree ref='tree' 
              :data='treeData' 
              :multiple='true' 
              @node-click="getSelectedNodes"
              
              @node-check="getCheckedNodes2"
              :halfcheck='true'
          />

          <br/>

          <h2>promise的异步回调的使用使用场景，元素的下拉的，编辑的时候，需要显示默认的下拉的值，
            <br/>
            然而ajax是异步的程序并不知道，请求下拉数据和请求编辑参数的先后99999</h2>

           <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>


         
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { setTimeout } from 'timers';
export default {
    data(){
        return {
        value:'',
        options: [],

        searchword: '',
              treeData: [
                {
                  title: 'node1',
                  expanded: true,
                  id:12,
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
                  id:12,
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
    mounted(){
       //使用promise 控制程序的执行的步骤  
        this.getSelectData().then((data)=>{
             this.getEditInfo();
        })
    },
    computed:{
        ...mapState({
            count:"count"
        })
    },
    methods:{
        getEditInfo(){//获得编辑信息
            console.log("seconed")
            setTimeout(()=>{
                 this.value = 3
            },500)
        },
        getSelectData(){//获得下拉数据,放到promise的resolve的里面
            console.log("first")
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{//使用settimeout模拟ajax请求数据
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
                           this.options =data;
                           resolve(data)
                },1000)
            })
            
        },
        getSelectedNodes(val){
           console.log(val)
        },
        getCheckedNodes2(obj,bool){
          //alert("ok")
          console.log(obj)
          console.log(bool)
        },
        getNodes(val){
          console.log(val)
        }

    }
}
</script>
<style>

.a{
  border: 1px solid #e3e8f1;
}

</style>


