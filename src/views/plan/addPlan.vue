<template>
    <div>
        <div class="left" ref="left">

        </div>
        <div class="main" ref="main">
            <div class="inner">
                    <h2>定向的选择加上布局的实战</h2>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="planRuleForm">
                        <el-form-item label="投放时段:">
                        <div >
                            <vTimeSlot ref="timeslot" @curActiveTabPeriod="curActiveTabPeriod"></vTimeSlot>
                        </div>
                        </el-form-item>
                    </el-form>
            </div>
     
         </div>

         <div class="right" ref="right">

         </div>


    </div>
</template>
<script>
import vTimeSlot from "./timeSlot.vue";
export default {
    data(){
        return{
             curTimeActiveTabPeriod: "", //投放时段的页签
             ruleForm:{
                 
             }
        }
    },
    components:{
        vTimeSlot,
    },
    mounted(){
        //监听滚动条的高度

       window.addEventListener('scroll', function(){
           //隐藏位置高度  scrollTop  
           //窗口的高度 clientHeight
           //元素滚动条内的内容的高度 scrollHeight
           console.log(document.documentElement.scrollTop)
           console.log(document.documentElement.clientHeight)
           console.log(this.$refs.left.scrollHeight)

           if(document.documentElement.scrollTop + document.documentElement.clientHeight >= this.$refs.left.scrollHeight){
               console.log("ok")
               //右侧是一致的
                    this.$refs.left.style.cssText = "position:fixed; font-size:13px;bottom:0px;z-index:99";
                    this.$refs.main.style.cssText = "margin-left:300px";
           }else{
                 this.$refs.left.style.cssText = " float: left";
                 this.$refs.main.style.cssText = "margin-left:0px";
           }


       }.bind(this))

        
    },
    methods:{
       curActiveTabPeriod(val) {
          this.curTimeActiveTabPeriod = val;
        },
    }
}
</script>

<style scoped>
   .left{
        width: 300px;
        float: left;
        border:1px solid red;
        height: 3000px;
   }
   .main{
        float:left;
        margin-left:2px;
        height: 11039px;
        border:1px solid #ddd;
        width: 900px
   }
   .inner{
       position: relative;
   }
   .right{
       float:right;
       width: 300px;
       border:1px solid green;
       height: 2142px;
   }
   @media screen and (max-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
        .class {
            background: #ccc;
        }
  }
  
</style>

