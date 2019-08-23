<template>
    <div class="slide" @mouseenter="enterFn" @mouseleave="leaveFn">
      <div class="con">
          <slot name="content"></slot>
      </div>
      <el-collapse-transition>
        <div class="show-box" v-show="isShow">
          <div class="transition-box">
            <el-button  size="mini">修改</el-button>
            <el-button  size="mini">下载</el-button>
          </div>
        </div>
      </el-collapse-transition>
    </div>
</template>
<script>
export default {
  data(){
    return{
       isShow: false,
    }
  },
  methods:{
     //鼠标移入
      enterFn(){
        this.isShow = true
      },
      //鼠标移出
      leaveFn(){
         this.isShow = false
      },
  }
}
</script>
<style lang="scss" scoped> 
.slide{
   margin-top: 20px; height: 100px;width:200px;position:relative
}
.con{
    width: 200px;
    height: 100px;
    border-radius: 4px;
    border:1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
}
 .show-box{
   position: absolute;
   top:0;
   left: 0px;
 }
   .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background:rgba(0,0,0,0.6);
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>