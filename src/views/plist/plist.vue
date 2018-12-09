<template>
    <div>
        <input type="button" value="+" @click="addNum">
        <mt-button size="small" @click.native="getData">small</mt-button>
        <hr>

        <!-- <material-picker v-model="colors" />
        <compact-picker v-model="colors" />
        <swatches-picker v-model="colors" />
        <slider-picker v-model="colors" />
        <sketch-picker v-model="colors" />
        <chrome-picker v-model="colors" /> -->


       <div class="demo-item" >
                 <div class="setColor"  ref="userInfo">
                      <span @click="showColor">⬇️</span >
                      <photoshop-picker v-show="isShowColor" 
                      ref="colorPicker" class="colorPicker" style="position:absolute" 
                       v-model="colors"
                       @ok="onOk" @cancel="onCancel">
                       </photoshop-picker>
                </div>

                <div class="con" :style="getColor" ref="con">
                        点击左侧图标改变字体颜色的部分
                </div>
      </div>

      <hr>

      <MyCard :list="listData"></MyCard>

    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { Material,Compact ,Swatches,Slider,Sketch,Chrome,Photoshop} from 'vue-color'


import {getCookie,removeCookie} from "@/utils/index.js"

import MyCard from "@/components/card.vue"


export default {
    data(){
        return{
             colors : '#194d33',
             isShowColor:false,
             listData:[
                 "足球","篮球","排球","乒乓球"
             ]
        }
    },
    components:{
        'material-picker': Material,
        'compact-picker': Compact,
        'swatches-picker': Swatches,
        'slider-picker': Slider,
        'sketch-picker': Sketch,
        'chrome-picker': Chrome,
        'photoshop-picker': Photoshop,
        "MyCard":MyCard
    },
    methods:{
 
        showColor(){
            this.isShowColor =!this.isShowColor
        },
        onOk(){
            this.$refs.con.style.color = this.colors.hex;//分为实时监控和点击的监控
            this.isShowColor = false;
        },
        onCancel(){
            this.isShowColor = false;
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
    computed:{
        getColor(){
            return {
                 //color: this.colors.hex,
            }
        }
    },
    mounted(){
        if(getCookie("username")){
            removeCookie('username')
        }
        let _this = this;
        document.addEventListener("click",function(e){//点击空白处隐藏
            if(!!_this.$refs.userInfo.contains(e.target)) return;
            _this.isShowColor  = false;
        })
        
        
    }
}
</script>
<style>
.setColor{
    display: inline-block;
    width: 30px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: #ddd;
     margin-left: 100px
}
.con{
    display: inline-block;
    height: 100px;
    width: 100px;
    border: 1px solid green;
    margin-left: 100px
}


</style>


