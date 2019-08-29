<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 22:29:48
 * @LastEditTime: 2019-08-12 14:54:47
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="box" >
    <div class="head">
      head
    </div>

    <div>
      <h2>动态切换 组件是否被缓存起来 keep-alive组件的缓存 使用key 将缓存组件</h2>
      <el-button  @click="switchFn" type="primary">切换组件最小化的渲染</el-button>
      {{input}} --- {{input2}}

      <el-input type="text" v-model="input"  v-if="show" :key="1"></el-input>
      <el-input type="password" v-model="input2" v-else :key="2"></el-input>
    </div>

    <div>
        <h2>表格切换</h2>
         <el-button  @click="switchFn2" type="primary">切换组件</el-button>
         <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>


    </div>
    <div class="content" style="display:none">
      <div class="left"
           ref="left">
        <ul>
          <li v-for="(item, index) in left"
              :key="item"
              :class="{current: currentIndex == index}"
              @click="selectItem(index, $event)">
            <span class="left-item">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right"
           ref="right">
        <ul>
          <li class="right-item right-item-hook"
              v-for="item in right"
              :key="item.name">
            <h2>{{item.name}}{{"vv"}}</h2>
            <ul>
              <li v-for="num in item.content"
                  :key="num.name">
                <div>{{item.name+num}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
 
<script>
import BScroll from 'better-scroll'
var ComponentA = {
  name:'component-a',
  data: function () {
    return {
      count: 52
    }
  },
  template:`<div>
    当前的数字是{{count}}
  </div>`
 }
var ComponentB = {
  name:'component-b',
  data: function () {
    return {
      count: 88
    }
  },
  template:`<div>
    当前的数字是{{count}}
  </div>`
 }
export default {
  components:{
    // 组件的引入 动态组件和异步组件的形式
    'component-a': ComponentA,
    'component-b': ComponentB
  },
  data() {
    return {
      show:true,
      left: ['a', 'b', 'c', 'd', 'e', 'f'],
      right: [
        {
          name: 'a',
          content: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13']
        },
        {
          name: 'b',
          content: ['1', '2', '3', '4', '5']
        },
        {
          name: 'c',
          content: ['1', '2', '3', '4', '5']
        },
        {
          name: 'd',
          content: ['1', '2', '3', '4', '5']
        },
        {
          name: 'e',
          content: ['1', '2', '3', '4', '5']
        },
        {
          name: 'f',
          content: ['1', '2', '3', '4', '5', '7', '6']
        },
      ],
      listHeight: [],
      scrollY: 0, //实时获取当前y轴的高度
      clickEvent: false,
      input:'',
      input2:"",
      currentTabComponent:'component-a',//动态组件的默认值的形式
      // 书写动态组件的形式 动态组件 keepalive 用于缓存
    }
  },
  methods: {
    switchFn(){
      //切换的时候将原来的值 进行清空操作 切换时候将原来的值进行清空的操作
      this.input=""
      this.input2=""
      this.show = !this.show
    },
    switchFn2(){
        // 引入两个组件 然后切换的时候，动态改变切换后的值 
        this.currentTabComponent =  this.currentTabComponent == "component-a" ? "component-b" :"component-a"
    },
    _initScroll() {
      // better-scroll的实现原理是监听了touchStart,touchend事件，所以阻止了默认的事件
      //（preventDefault）
      // 所以在这里做点击的话，需要在初始化的时候传递属性click,派发一个点击事件
      // 在pc网页浏览模式下，点击事件是不会阻止的，所以可能会出现2次事件，所以为了避免2次，
      // 可以在绑定事件的时候把$event传递过去
      this.lefts = new BScroll(this.$refs.left, {
         startX: 0,
         startY: 0,
         click: true
      })
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3  //探针的效果，实时获取滚动高度
      })
      //rights这个对象监听事件，实时获取位置pos.y
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0
      // clientHeigth  是元素的内容的高度 clientHeight 是元素的内容的高度
      // 将元素的高度 放进数组中 ，然后根据点击是那个位置，然后根据点击的是哪个位置，进行元素的
      // 滚动调位置
      this.listHeight.push(height)
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log("this.listHeight",this.listHeight)
    },
    selectItem(index, event) {
      this.clickEvent = true
      //在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed
      //浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性的时候return

      // 进行元素位置的变化的情况
      if (!event._constructed) {
        return
      } else {
        let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
        let el = rightItems[index]
        this.rights.scrollToElement(el, 300)
      }
    }
  },
  mounted() {
    //在二叉树中查找id为某个值的元素  可以使用广度优先遍历进行搜索  二叉树的遍历 
    // 广度优先搜索
    // 查找是否有孩子节点 有则放进去
    // 条件渲染 条件渲染 动态组件的使用 原生js的学习
    let tree = [
       {
         id:1,
         name:1,
         child:[
            {
              id:2,
              name:2,
              child:[
                {
                  id:4,
                  name:4,
                },
                 {
                  id:5,
                  name:5,
                }
              ]
            },
             {
              id:3,
              name:3,
               child:[
                {
                  id:6,
                  name:6,
                },
                 {
                  id:7,
                  name:7,
                }
              ]
            }
         ]
       }
    ]

    function guang(data,id){// 广度遍历
        let node=[...data];//存放所有的节点 
        // 广度优先遍历 数组的push  数组的push操作
        for(let i=0;i<node.length;i++){
                if(node[i].id == id){
                    return node[i]//查找的元素进行返回
                    break;// while循环的结束条件 break 
                }else if(node[i].child){
                  //... 展开运算符
                    node.push(...node[i].child)
                }
                // 元素的遍历的操作
         }
        
        return null
    }

    console.log("rrrggg",guang(tree,7))



    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
    // vue-cli 中模块化编程，每页都是一个模块，切换时候，vue中切换时候，组件销毁了  单元测试
    ///console.log("only",document.getElementById("only"))
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        //当height2不存在的时候，或者落在height和height2之间的时候，直接返回当前索引
        //>=height，是因为一开始this.scrollY=0,height=0
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          return i
        }
      }
      //如果this.listHeight没有的话，就返回0
      return 0
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  position: absolute;
  top: 100px;
  bottom: 54px;
  overflow: hidden;
  background: #eee;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  background-color: #f3f5f7;
}
.left li {
  width: 100%;
  height: 100%;
}
.current {
  background-color: red;
}
.left-item {
  display: block;
  width: 100%;
  height: 100px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid yellow;
}
.right {
  flex: 1;
}
.right-item li {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-bottom: 1px solid yellow;
}
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>