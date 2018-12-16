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
      <hr>
        <h2>回调</h2>
       <el-select v-model="value" placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>

      <hr>
      <h2>async await解决</h2>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>





    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { Material,Compact ,Swatches,Slider,Sketch,Chrome,Photoshop} from 'vue-color'


import {getCookie,removeCookie} from "@/utils/index.js"

import MyCard from "@/components/card.vue"
import { setTimeout } from 'timers';


export default {
    data(){
        return{
                colors : '#194d33',
                isShowColor:false,
                listData:[
                    "足球","篮球","排球"
                ],
                options: [],
                value: '',
                options2: [],
                value2: ''
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
    mounted(){
        if(getCookie("username")){
            removeCookie('username')
        }
        let _this = this;
        document.addEventListener("click",function(e){//点击空白处隐藏
            if(!!_this.$refs.userInfo.contains(e.target)) return;
            _this.isShowColor  = false;
        })

        this.getSelectData(this.getEditInfo);//作为回调函数执行  先加载所有在匹配当前

        this.getEditInfo2();

    },
    methods:{
        async getEditInfo2(){
             await this.getSelectData2();
             setTimeout(()=>{
                this.value2 = "4"
            },1000)
        },

        getSelectData2(){//使用函数的回调解决延迟的问题
            return new Promise((resolve, reject)=>{
                 setTimeout(()=>{
                    this.options2 =[{
                            value: '1',
                            label: '黄金糕'
                            }, {
                            value: '2',
                            label: '双皮奶'
                            }, {
                            value: '3',
                            label: '蚵仔煎'
                            }, {
                            value: '4',
                            label: '龙须面'
                            }, {
                            value: '5',
                            label: '北京烤鸭'
                    }]
                    resolve()
               },3000)
            })
           
        },

        getEditInfo(){
            setTimeout(()=>{
                console.log("sing")
                this.value = "5"
            },1000)
        },
        getSelectData(callback){//使用函数的回调解决延迟的问题
            setTimeout(()=>{
                console.log("all")
                this.options =[{
                        value: '1',
                        label: '黄金糕'
                        }, {
                        value: '2',
                        label: '双皮奶'
                        }, {
                        value: '3',
                        label: '蚵仔煎'
                        }, {
                        value: '4',
                        label: '龙须面'
                        }, {
                        value: '5',
                        label: '北京烤鸭'
                 }]
                 callback()
            },3000)
        },
 
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


