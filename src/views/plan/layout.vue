<template>
    <el-row>
        <el-col :span="12">
            <div>
                <h2>实现多列布局</h2>
                <span>输入列数：</span>
                <el-input style="width:200px"
                          v-model="colnum"
                          placeholder="请输入内容"></el-input>
                <div class="wrap"
                     :style="styleObject">
                    按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
                    按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
                    按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;
                </div>
                <hr>
                <h2>动态组件</h2>
                <button @click="changePage(index)"
                        v-for="(item,index) in list "
                        :key="index">{{item.name}}</button>
                <keep-alive>
                    <component v-bind:is="currentTabComponent"></component>
                </keep-alive>

                <hr>
                <div id="printTest">
                    　　　　　<p>锄禾日当午</p>
                    　　　　　<p>汗滴禾下土 </p>
                    　　　　　<p>谁知盘中餐</p>
                    　　　　　<p>粒粒皆辛苦</p>
                    　　　</div>
                　　　<button v-print="'#printTest'">打印</button>

                <hr />

                <div id="subOutputRank-print">
                    战略思维为何重要？2014固然取卵的短期行为时有发生，莫不与缺少战略思维有关。
                </div>

                <el-button @click="printTable">原生打印</el-button>

                <Ad>
                    <h1 slot="title">布局1</h1>
                </Ad>
            </div>
        </el-col>
        <el-col :span="12">
            <h2>语音上传的下载</h2>
            <audio :src="audioSrc"
                   controls="controls"
                   loop="loop">亲 您的浏览器不支持html5的audio标签</audio>

            <hr>

            <input type="file"
                   name="avatar"
                   id="avatar"
                   multiple="multiple"
                   @change="upload($event)">
            <hr>

            <img :src="imgSrc"
                 alt="12">
            <hr>

            <el-upload class="upload-demo"
                       ref="upload"
                       action="doUpload"
                       :limit="1"
                       :before-upload="beforeUpload">
                <el-button slot="trigger"
                           size="small"
                           type="primary">选取文件</el-button>
                <a href="./static/moban.xlsx"
                   rel="external nofollow"
                   download="模板">
                    <el-button size="small"
                               type="success">下载模板</el-button>
                </a>
                <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                <div slot="tip"
                     class="el-upload__tip">只能上传excel文件，且不超过5MB</div>
                <div slot="tip"
                     class="el-upload-list__item-name">{{fileName}}</div>
            </el-upload>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary"
                           @click="submitUpload()">确定</el-button>
            </span>

        </el-col>
    </el-row>

</template>

<script>
import Content from "@/components/content"
import News from "@/components/news.vue"
import Ad from "@/components/ad.vue"

export default {
    data () {
        return {
            doUpload: 'https://jsonplaceholder.typicode.com/posts/',
            fileName: '',
            colnum: 1,
            currentTabComponent: Content,
            // audioSrc: require("./YBXYQ.mp3"),
            audioSrc: "",
            imgSrc: '',
            list: [
                {
                    name: '联系',
                    word: 'Content'
                }, {
                    name: '新闻',
                    word: 'News'
                }, {
                    name: '广告',
                    word: 'Ad'
                }
            ],

        };
    },
    methods: {

        upload (e) {
            let that = this;
            console.log(e.target.files[0])
            var freader = new FileReader();
            freader.readAsDataURL(e.target.files[0]);
            freader.onload = function (e) {
                console.log(e.target.result)
                that.imgSrc = e.target.result

                // $("#image").attr("src", e.target.result);  //显示图片
            }



        },
        beforeUpload (file) {
            let that = this;
            console.log(file, '文件');
            this.files = file;
            // let url = window.URL.createObjectURL(file);
            // console.log(url)
            // this.audioSrc = file
            let url = window.URL.createObjectURL(file); //表示一个指定的file对象或Blob对象

            // this.audioSrc = file
            console.log(url, "看一下这是啥")
            let a = document.createElement("a");
            document.body.appendChild(a);
            // let fileName = msg.headers["content-disposition"].split(";")[1].split("=")[1];  //filename名称截取
            a.href = url;
            a.download = "音频"; //命名下载名称
            a.click(); //点击触发下载  
            window.URL.revokeObjectURL(url);  //下载完成进行释放


            var freader = new FileReader();
            freader.readAsDataURL(file);
            freader.onload = function (e) {
                that.audioSrc = e.target.result
                // $("#image").attr("src", e.target.result);  //显示图片
            }




            // const extension = file.name.split('.')[1] === 'xls'
            // const extension2 = file.name.split('.')[1] === 'xlsx'
            // const isLt2M = file.size / 1024 / 1024 < 5
            // if (!extension && !extension2) {
            //     this.$message.warning('上传模板只能是 xls、xlsx格式!')
            //     return
            // }
            // if (!isLt2M) {
            //     this.$message.warning('上传模板大小不能超过 5MB!')
            //     return
            // }
            // this.fileName = file.name;
            // return false // 返回false不会自动上传
        },

        submitUpload () {
            debugger
            console.log('上传' + this.files.name)
            if (this.fileName == "") {
                this.$message.warning('请选择要上传的文件！')
                return false
            }
            let fileFormData = new FormData();
            fileFormData.append('file', this.files, this.fileName);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
            let requestConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
            this.$http.post(`/basedata/oesmembers/upload?companyId=` + this.company, fileFormData, requestConfig).then((res) => {
                debugger
                if (data && data.code === 0) {
                    this.$message({
                        message: '操作成功',
                        type: 'success',
                        duration: 1500,
                        onClose: () => {
                            this.visible = false
                            this.$emit('refreshDataList')
                        }
                    })
                } else {
                    this.$message.error(data.msg)
                }
            })
        },

        changePage (index) {//点击切换的时候，改变动态组件的内容
            //去掉字符串
            let arr = ['Content', 'News', 'Ad'];
            this.currentTabComponent = arr[index];
        },
        printTable () {
            let subOutputRankPrint = document.getElementById('subOutputRank-print');
            console.log(subOutputRankPrint.innerHTML);
            let newContent = subOutputRankPrint.innerHTML;
            let oldContent = document.body.innerHTML;
            document.body.innerHTML = newContent;
            window.print();
            window.location.reload();
            document.body.innerHTML = oldContent;
            return false;
        }
    },
    components: {
        News,
        Content,
        Ad
    },
    computed: {
        //使用计算属性 实时进行值的改变  动态组件使用component is的属性的分析
        styleObject () {
            return {
                color: "red",
                "column-count": this.colnum, //实时获得列数进行展示
            };
        }
    },
    mounted () { }
};
</script>

<style scoped>
.wrap {
    column-count: 1;
    column-gap: 30px;
    column-rule: 1px solid #000;
}
</style>


