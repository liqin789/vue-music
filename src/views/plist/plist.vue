<template>
    <div>
        <input type="button" value="+" @click="addNum">
        <mt-button size="small" @click.native="getData">small</mt-button>

            <hr>
           <select v-model="obj.selected" v-for="obj in selectedArr" @change="select">
                <option v-for="item in obj.optionArr" :value="item.value">{{item.text}}</option>
            </select>
            <p>selectedArr: {{ selectedArr }}</p>

    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import {getCookie,removeCookie} from "@/utils/index.js"
export default {
    data(){
        return{
     
                  selectedArr: [
                        {
                            selected:'a0',
                            optionArr:[
                                { text: '10', value: 'a0' },
                                { text: '20', value: 'b0' },
                                { text: '30', value: 'c0' }]
                        }
                      
                      ]
        
        }
    },
    methods:{
          select:function(e){
            var current = e.target.value;//获取选中值
            var currentIndex = this.getCurrentIndex(current)+1;//获取当前层级
            this.removeSelected(currentIndex);
            this.addSelected(currentIndex);
          },


          //获取当前选中层级
            getCurrentIndex:function(value){
                for(var i=0;i<this.selectedArr.length;i++){
                    for(var j=0;j<this.selectedArr[i].optionArr.length;j++){
                    if(this.selectedArr[i].optionArr[j].value === value){
                        return i
                    }
                    }
                }
            },
            //去除当前选中层级之后的级数
            removeSelected:function(index){
                if( index < this.selectedArr.length ){
                    this.selectedArr.splice(index,this.selectedArr.length)
                }
            },

            //模拟添加下一级
            addSelected:function(index){
                this.selectedArr.push({
                    selected:'a'+index,
                    optionArr:[
                    { text: '1'+index, value: 'a'+index },
                    { text: '2'+index, value: 'b'+index },
                    { text: '3'+index, value: 'c'+index }
                    ]
                })
            },


        ...mapMutations({
            addNum:'increment'
        }),
        getData(){
            this.$http({
                method:"POST",
                url:`/api/role-roleDefault`,
                data:{id:16}
            }).then(function(res){
                console.log(res)
            },function(res){

            })
        }
    },
    mounted(){
        if(getCookie("username")){
            removeCookie('username')
        }
    }
}
</script>
<style>

</style>


