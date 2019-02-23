<template>
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

            按照淘宝首页的无缝图片切换做：第一张和最后一张复制，打开浏览器时ul的left是-520，然后走完最后一张，ul的left是-1040。这样实现无缝切换，我就是卡在这里了，它这么样实现到最后一个还是顺着到-1040，保证不是倒;

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
            战略思维为何重要？2014年8月，习近平在纪念邓小平同志诞辰110周年座谈会上深刻指出，“战略问题是一个政党、一个国家的根本性问题。战略上判断得准确，战略上谋划得科学，战略上赢得主动，党和人民事业就大有希望。”
            　　早在2003年，习近平就发表文章表明，“要有世界眼光和战略思维”，“要努力增强总揽全局的能力，放眼全局谋一域，把握形势谋大事”。
            　　党的十八大以来，他更是多次强调在改革和发展的各项工作中要有战略思维，“战略、全局、方向、长远”等都是他讲话中的高频词。谈到全面深化改革时，他说“不谋全局者，不足谋一域”，强调全面深化改革要坚持从大局出发考虑问题，“要真正向前展望、超前思维、提前谋局”；在省部级专题研讨班上，他指出“全党要提高战略思维能力，不断增强工作的原则性、系统性、预见性、创造性”。
            　　站在战略的高度，努力增强总揽全局的能力，放眼全局谋一域，把握形势谋大事，才能够从全局角度、以长远眼光看问题，从整体上把握事物发展趋势和方向，才能够确保制定科学可行的战略方案，又能够根据环境变化及时调整战略方案。
            　 习近平认为，要全面建成小康社会和实现社会主义现代化，有许许多多的重大问题需要进行战略谋划。凡是涉及我国经济、政治、文化、社会、生态、外交、国防和党的建设等全局性的重大问题，都需要从战略上进行思考、研究和筹谋。
            　　2012年12月9日，习近平提出了“中华民族伟大复兴中国梦”的宏伟愿景。为了实现这个奋斗目标，以习近平同志为核心的党中央立足中国发展实际，逐渐形成了“五位一体”总体布局和“四个全面”战略布局等一系列治国理政新理念、新思想、新战略。
            　　在习近平看来，战略思维永远是中国共产党人应该树立的思维方式。对各级领导干部而言，战略思维能力则意味着，要善于把解决具体问题与解决深层次问题结合起来，不能头痛医头、脚痛医脚；善于把局部利益放在全局利益中去把握，不能只见树木、不见森林；善于把眼前需要与长远谋划统一起来，不能急功近利、投机取巧；善于把国内形势与国际环境结合起来，不能闭目塞听、固步自封。
            　　现实中，也有一些干部认为，总揽全局是大领导的事，在地方、基层或部门工作没必要拥有战略思维。殊不知，何谓全局、何谓局部，本身就是相对的。相对于全国，地方固然是局部，但是相对于辖区，地方又何尝不是整体？一些地方，取利一时的短视决策寻常可见，杀鸡取卵的短期行为时有发生，莫不与缺少战略思维有关。
        </div>

        <el-button @click="printTable">原生打印</el-button>

        <Ad>
            <h1 slot="title">布局1</h1>
        </Ad>

    </div>
</template>

<script>
import Content from "@/components/content"
import News from "@/components/news.vue"
import Ad from "@/components/ad.vue"



export default {
    data () {
        return {
            colnum: 1,
            currentTabComponent: Content,
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


