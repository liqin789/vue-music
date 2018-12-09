<template>
    <div>
        <h2> <slot name="title">默认的内容</slot> </h2>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="(item,index) in list" :key="index" class="text item">
                {{'球类: ' + item }}
            </div>
        </el-card> 

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:["list"],
    methods:{

    },


}
</script>

<style>

</style>

