<template>
    <div>
        <el-menu
            :default-active="$route.path"
            :router='IStrue'
            class="el-menu-vertical-demo"
            :unique-opened="true"
            @open="handleOpen"
            @close="handleClose"
            text-color="#333">
            <template v-for="(item, index) in menuList">
                <el-submenu
                    v-if="item.children.length !== 0"
                    :index="index"
                    :item="item"
                    :key="index">
                    <template slot="title">
                        <i :class = item.icon></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item
                        v-for="itemChild in item.children"
                        :index="itemChild.id"
                        :item="itemChild"
                        @click="clickMenu(itemChild)"
                        :key="itemChild.id">{{itemChild.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item
                    v-else
                    :item="item"
                    :key="index"
                    :index="index"
                    @click="clickFirstMenu(item)"
                    >
                    <i :class = item.icon></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { getMenuList } from '../../../service/list.service.js'
export default {
    data() {
        return {
            IStrue:true,
            menuList: [
                { name: "我的任务",
                  icon: "el-icon-s-cooperation",
                  children: [
                      {name: '待审核', path: '/list/willApproval'},
                      {name: '待处理', path: '/list/willHandle'},
                      {name: '待执行', path: '/list/willExecute'}]
                 },
                { name: "我的直播",
                  icon: "el-icon-video-camera",
                  children: [
                      {name: '我发起的', id: 'myCreated'},
                      {name: '我审核的', id: 'myApproved'},
                      {name: '我处理的', id: 'myHandled'},
                      {name: '我执行的', id: 'myExecuted'}]
                 },
                {
                  name: '我的草稿',
                  icon: "el-icon-setting",
                  id: 'myDraft',
                  children: []
                },
                {
                  name: '今天的直播',
                  icon: "el-icon-time",
                  id: 'todayLiveBroadcast',
                  children: []
                },
                {
                  name: '全部直播',
                  icon: "el-icon-menu",
                  id: 'allLiveBroadcast',
                  children: []
                }
            ],
            menuActive: {
                activeIndex: 'willApproval'
            }
        }
    },
    methods: {
        getPath(){
          this.defaultUrl = this.$route.path;
          console.log("this.defaultUrl",  this.defaultUrl)
        },
        handleOpen() {},
        handleClose() {},
        //二级菜单事件
        clickMenu(item) {
            console.log(item.id);
            // 例子
            this.$router.push({
                path: `${item.path}` // 跳转
            });
            // this.$store.commit("changeTab", choose);
        },
        //一级菜单事件
        clickFirstMenu(item){
            console.log('单节点');
             this.$router.push({
                path: `${item.path}`
            });
        },
        // 菜单接口
        getMenu(){
            getMenuList().then(data =>{
                if(data != null && data.status == "200"){
                    console.log(data, '菜单数据');
                    this.menuList = data;
                    console.log(this.menuList, '000')
                }
            })
        },
        saveStateRouter() {
            this.menuActive.activeIndex = sessionStorage.getItem('activeIndex')
        },

    },
    computed: {
        //获取type
        listType(){
            return this.$route.params.type;
        }
    },
     watch: {
      '$route':'getPath'
    },
    mounted() {
       // this.getMenu();
        // console.log(this.listType, '路由类型');
        //zancun
        if (sessionStorage.getItem('activeIndex')) {
            this.saveStateRouter()
        }
    }
};
</script>

<style scoped>
    .el-menu-vertical-demo {
        border-right: 0px;
    }

</style>
