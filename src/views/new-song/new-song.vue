<template>
    <div>
        <span>数量</span>
        <span>{{count}}</span>
        
        <br/>
          <v-tree ref='tree' 
              :data='treeData' 
              :multiple='true' 
              @node-click="getSelectedNodes"
              @node-check="getSelectedNodes"
              :halfcheck='true'
          />

            <v-tree ref='tree' 
              :data='treeData2' 
              :multiple='true' 
              @node-click="getSelectedNodes"
              @node-check="getSelectedNodes"
              :halfcheck='true'
          />
      
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
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
    computed:{
        ...mapState({
            count:"count"
        })
    },
    methods:{
        getSelectedNodes(val){
           console.log(val)
        },

    }
}
</script>
<style>
.halo-tree .inputCheck{
  display: none
}
.a{
  border: 1px solid #e3e8f1;
}

</style>


