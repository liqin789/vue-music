<template>
    <div>
        <el-row>
            <el-col :span="12">
                现在的count是:{{count}}
                <hr />
                <h2>实现下拉加载更多的数据</h2>
                <div style="height:300px;overflow:auto;border:1px solid red"
                     ref="myscroll">
                    <ul>
                        <li v-for="(item,index) in articles"
                            class="item"
                            :key="index">
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
                <hr>
                <lq-ul :dataList="dataList"></lq-ul>
            </el-col>
            <el-col :span="12">
                <!-- 自定义全局的指令 -->
                <h2>自定义指令</h2>
                <span>元素获得焦点</span>
                <input type="text"
                       v-focus
                       name=""
                       id="">
                <div>
                    <span>元素的拖拽</span>
                    <div v-drag
                         style="border:1px solid red;background:green;cursor: pointer;width:50px;height:50px;position:absolute"></div>
                </div>
                <div>
                    <img style="width:100%"
                         src="https://goss2.vcg.com/creative/vcg/800/version23/VCG41471892237.jpg"
                         alt="">
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import { mapState } from 'vuex'
import { setCookie } from "@/utils/index.js"
export default {
    //es6的模块化的概念。面向对象的思维。面向对象的思维 
    data () {
        return {
            articles: [],//文章
            dataList: [
                {
                    id: 1,
                    name: '足球'
                },
                {
                    id: 2,
                    name: '篮球'
                },
                {
                    id: 3,
                    name: '排球'
                }
            ]

        }
    },
    methods: {

    },
    computed: {
        ...mapState([
            "count"
        ]),
        //    count () {
        //       return this.$store.state.count
        //     }

    },
    mounted () {
        setCookie("username", "liqin");
        // 缓存指针
        let _this = this;
        let page = 1;//
        let totalPage = 5;
        // 设置一个开关来避免重负请求数据
        let sw = true;
        this.$http.get('https://www.easy-mock.com/mock/5ae1a0ffe98e87389dadefb2/example/news')
            .then(function (response) {
                // console.log(JSON.parse(response.data).stories);
                // 将得到的数据放到vue中的data
                _this.articles = response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        // 注册scroll事件并监听
        //记录每次滑动的时候加载20条的数据

        _this.$refs.myscroll.addEventListener('scroll', function () {
            // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
            // console.log(document.body.scrollTop || document.documentElement.scrollTop); // 滚动高度
            // console.log(document.body.offsetHeight); // 文档高度

            //if(document.body.scrollTop ||document.documentElement.scrollTop + window.innerHeight >= document.body.offsetHeight) {
            if (_this.$refs.myscroll.scrollTop + _this.$refs.myscroll.offsetHeight >= _this.$refs.myscroll.scrollHeight) {
                page += 1;
                if (page > totalPage) {//累加后的页数大于总页数的时候，不再发送请求
                    return;
                }
                if (sw == true) {//请求下一页数据
                    //将开关关闭
                    sw = false;
                    _this.$http.get('https://www.easy-mock.com/mock/5ae1a0ffe98e87389dadefb2/example/news2', {
                        params: { //请求参数
                            page: page
                        }
                    })
                        .then(function (response) {
                            // 将新获取的数据push到vue中的data，就会反应到视图中了
                            response.data.data.forEach(function (val, index) {
                                _this.articles.push(val);
                            });
                            // 数据更新完毕，将开关打开
                            sw = true;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }
            }
        })


    },

}
</script>
<style lang="scss" scoped>
.item {
    height: 25px;
    line-height: 25px;
}
</style>


