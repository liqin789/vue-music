<template>
  <div>
      <div @click="openDialog">
         <slot name="title"></slot> 
      </div>
     <el-dialog
        title="提示"
        :visible="dialogVisible"
        width="30%">
        <span>{{id}}</span>
       <ul>
         <li v-for="item in list" :key="item">{{item}}</li>
       </ul>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消1</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  // 插槽分为 具名插槽和匿名插槽 slot 进行区分
  // 事件的冒泡传播 子元素的和父元素同一个事件名，子元素会冒泡到父元素上
  // 组件接受 props和验证  父子组件的冒泡
  // 同级别的元素不存在冒泡
  // 尽量不去更改父组件传递的props的值 保证数据的单项的传递
  // props 传值的时候 根据传递不同的值 然后参数不同  发送不同的ajax的值 
  // 父子组件传递值不同 然后执行不同的方法
  props:{
    // list:{
    //   type:Array
    // },
    id:{
      type:String
    }
  },
  data(){
    return{
        list:[],//响应式数据写在data中，不是相应的数据可以放到外部
        dialogVisible:false
    }
  },
  mounted(){
      console.log("detail loading")
  },
  methods:{
    openDialog(){
      setTimeout(()=>{
           console.log('this.id',this.id)
           //请求后台数据，进行展示
           this.list = this.id == 111 ? [66,77,88] : ['aa','bb','cc']
           this.dialogVisible = true           
      },2000)
     
    },
    submit(){
      console.log("当前的id是", this.id)
      // 根据当前的ID 进行发送ajax 请求
      this.dialogVisible = false
    }
   
  }
}
</script>
<style scoped>

</style>