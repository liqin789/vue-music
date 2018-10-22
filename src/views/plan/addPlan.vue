<template>
    <div>
          <h2>定向的选择</h2>
          <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="planRuleForm">
              <el-form-item label="投放时段:">
              <div >
                  <vTimeSlot ref="timeslot" @curActiveTabPeriod="curActiveTabPeriod"></vTimeSlot>
              </div>
             </el-form-item>
          </el-form>


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

    },
    methods:{
       curActiveTabPeriod(val) {
          this.curTimeActiveTabPeriod = val;
        },
    }
}
</script>

<style>
 
</style>

