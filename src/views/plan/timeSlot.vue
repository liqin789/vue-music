<template>
     <div class="time-slot">
        <el-tabs type="card" v-model="activeTabPeriod" @tab-click="tabChangePeriod(activeTabPeriod)">
            <el-tab-pane name="6-1-1">
                <span slot="label">
                     <span class="select-item ">全天投放</span>
                </span>
            </el-tab-pane>

            <el-tab-pane name="6-2-1" class="margin-bottom-30">
                  <span slot="label">
                     <span class="select-item ">设置时段</span>
                 </span>
                  <table>
                         <thead>
                             <th>全选</th>
                             <th class="special-cell"></th>
                             <th v-for="h in hours" :key="h" @click="singeHour(h)">{{h}}</th>
                         </thead>
                         <tbody>
                             <tr>
                                 <td class="special-cell-t"></td>
                                 <td class="special-cell-s"></td>
                                 <td colspan=24 class="special-cell-t"></td>
                             </tr>
                             <tr>
                                <th @click='allDay("一")'>一</th>
                                <td rowspan="7" class="special-cell"></td>
                                <td v-for="(h,index) in Monday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                              <tr>
                                <th @click='allDay("二")'>二</th>
                                <td v-for="(h,index) in Tuesday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                              <tr>
                                <th @click='allDay("三")'>三</th>
                                <td v-for="(h,index) in Wednesday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>

                              <tr>
                                <th @click='allDay("四")'>四</th>
                                <td v-for="(h,index) in Thursday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                              <tr>
                                <th @click='allDay("五")'>五</th>
                                <td v-for="(h,index) in Friday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                              <tr>
                                <th @click='allDay("六")'>六</th>
                                <td v-for="(h,index) in Saturday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                              <tr>
                                <th @click='allDay("日")'>日</th>
                                <td v-for="(h,index) in Sunday" :key="index" :class='h.value == "1" ? "selected" : "" '>{{h.key}}</td>
                             </tr>
                         </tbody>

                     </table>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
export default {
    data(){
        return{
            activeTabPeriod:'6-2-1',
            hours:[
                '0','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16','17','18','19',
                '20','21','22','23'
                ],
            Monday:
             [
                 {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
            Tuesday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
            Wednesday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
             Thursday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
              Friday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
               Saturday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],
              Sunday:
             [
                {key: "0", value: "0"}
                ,{key: "1", value: "0"}
                ,{key: "2", value: "0"}
                ,{key: "3", value: "0"}
                ,{key: "4", value: "0"}
                ,{key: "5", value: "0"}
                ,{key: "6", value: "0"}
                ,{key: "7", value: "0"}
                ,{key: "8", value: "0"}
                ,{key: "9", value: "0"}
                ,{key: "10", value: "0"}
                ,{key: "11", value: "0"}
                ,{key: "12", value: "0"}
                ,{key: "13", value: "0"}
                ,{key: "14", value: "0"}
                ,{key: "15", value: "0"}
                ,{key: "16", value: "0"}
                ,{key: "17", value: "0"}
                ,{key: "18", value: "0"}
                ,{key: "19", value: "0"}
                ,{key: "20", value: "0"}
                ,{key: "21", value: "0"}
                ,{key: "22", value: "0"}
                ,{key: "23", value: "0"}
            ],

            //每一个点击都建立一个变量
                zero: false,
                first: false,
                second: false,
                third: false,
                fifth: false,
                sixth: false,
                seventh: false,
                eighth: false,
                ninth: false,
                firstten: false,
                eleventh: false,
                twelfth: false,
                thirteenth: false,
                fourteen: false,
                fifteen: false,
                sixteen: false,
                seventeen: false,
                eightteen: false,
                nineteen: false,
                twenty: false,
                twenty1: false,
                twenty2: false,
                twenty3: false,

                ismondaystatus: false, //默认全天24小时不全选
                istuesdaystatus: false,
                iswesdaystatus: false,
                isthuesdaystatus: false,
                isfridaystatus: false,
                isstadaystatus: false,
                issundaystatus: false,


        }
    },
    methods:{
        tabChangePeriod(){

        },

        setCheckedZero(ary,h,flag){
             ary.forEach((item,index) => {
                if(h == item.key){
                    if(flag){
                       item.value = "1" 
                    }else{
                      item.value = "0";
                    }
                    return;
                }
            });
        },

        singeHour(h){//选择小时
           this.ismondaystatus = !this.ismondaystatus;
           this.istuesdaystatus = !this.istuesdaystatus;
           this.iswesdaystatus = !this.iswesdaystatus;
           this.isthuesdaystatus = !this.isthuesdaystatus;
           this.isfridaystatus = !this.isfridaystatus;
           this.isstadaystatus = !this.isstadaystatus;
           this.issundaystatus = !this.issundaystatus;

           this.setCheckedZero(this.Monday,h,this.ismondaystatus);
           this.setCheckedZero(this.Tuesday,h,this.istuesdaystatus);
           this.setCheckedZero(this.Wednesday,h,this.iswesdaystatus);
           this.setCheckedZero(this.Thursday,h,this.isthuesdaystatus);
           this.setCheckedZero(this.Friday,h,this.isfridaystatus);
           this.setCheckedZero(this.Saturday,h,this.isstadaystatus);
           this.setCheckedZero(this.Sunday,h,this.issundaystatus);

        },

        setCheckedDay(ary,flag){
             ary.forEach((item,index) => {
               
                if(flag){
                    item.value = "1" 
                }else{
                    item.value = "0";
                }
                return;
               
            });
        },
        allDay(d){//选择天
            if(d == "一"){
                this.ismondaystatus = !this.ismondaystatus;
                this.setCheckedDay(this.Monday,this.ismondaystatus)
            }
        }
    },
    mounted(){

    },
}
</script>
<style lang="scss">
.time-slot {
     table{
          border-collapse:collapse;
          .special-cell{
              padding: 9px;
              border-top:none;
              border-bottom: none;
          }
          .special-cell-s {
            padding: 10px;
            border: none;
        }
        .special-cell-t {
            border-right: none;
            border-left: none;
            padding: 10px;
        }
        tr td.selected{
            background-color: #6cabff;
            color: #d8e9ff;
        }
     }
     table th,table td{ border:1px solid #ccc;padding: 9px;cursor: pointer;}
}
    
</style>

