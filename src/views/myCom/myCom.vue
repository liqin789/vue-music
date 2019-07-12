<template>
    <div>
       <template>
  <div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
    <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">Preview</span>
      {{currentPage}} / {{pageCount}}
    <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">Next</span>
    </p>

    <div>
          <el-pagination class="pagination"
                               :page-size="1"
                               :current-page.sync="currentPage"
                               layout="prev, pager, next, jumper"
                               :total="pageCount">
            </el-pagination>
    </div>
    <pdf
      :src="src" 
      :page="currentPage" 
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event" 
      @loaded="loadPdfHandler"> 
    </pdf>
    <!-- :src="src" // src需要展示的PDF地址
         :page="currentPage" // 当前展示的PDF页码
         @num-pages="pageCount=$event" // PDF文件总页码
         @page-loaded="currentPage=$event" // 一开始加载的页面
         @loaded="loadPdfHandler"> // 加载事件 -->
  </div>
</template>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
// console.log(pdfSrc)
export default {
    components: {pdf},
    data(){
        return{
        totalPage:0,
        currentPage: 0, // pdf文件页码
        pageCount: 0, // pdf文件总页数
        fileType: 'pdf', // 文件类型
　　　　　src: 'http://localhost:8888/media/logo.pdf' // pdf文件地址
        }
    },
   created(){
       console.log(this.src)
       this.src = pdf.createLoadingTask(this.src)
   },
    methods:{

         // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
      changePdfPage (val) {
        // console.log(val)
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
          // console.log(this.currentPage)
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
          // console.log(this.currentPage)
        }
      },

          // pdf加载时
      loadPdfHandler (e) {
        this.currentPage = 1 // 加载的时候先加载第一页
      }

    },
    mounted(){

    }
}
</script>

