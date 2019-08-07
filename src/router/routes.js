let NavBar = () => import('@/components/nav-bar/index') //导航
let NewSong = () => import('@/views/new-song/new-song') //新歌
let Plist = () => import('@/views/plist/plist') //歌单
let Singer = () => import('@/views/singer/singer') //歌手
let Rank = () => import('@/views/rank/rank') //歌手
let Plan = () => import('@/views/plan/addPlan') //计划
let Layout = () => import('@/views/plan/layout') //布局
let myCom = () => import('@/views/myCom/myCom') //组件

let diaTable = () => import('@/views/diaTable/diaTable') //组件

let treeMenu = () => import('@/views/treeMenu/treeMenu') //组件

export let routes = [
  {
    path: '/',
    title: '新歌',
    name: 'NewSong',
    components: {
      navbar: NavBar,
      default: NewSong
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/Plist',
    title: '歌单',
    name: 'Plist',
    components: {
      navbar: NavBar,
      default: Plist
    },
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/Singer',
    title: '歌手',
    name: 'Singer',
    components: {
      navbar: NavBar,
      default: Singer
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/Rank',
    title: '排行',
    name: 'Rank',
    components: {
      navbar: NavBar,
      default: Rank
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/Plan',
    title: '计划',
    name: 'Plan',
    components: {
      navbar: NavBar,
      default: Plan
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/layout',
    title: '布局',
    name: 'layout',
    components: {
      navbar: NavBar,
      default: Layout
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/myCom',
    title: '组件',
    name: 'myCom',
    components: {
      navbar: NavBar,
      default: myCom
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/diaTable',
    title: '表格',
    name: 'diaTable',
    components: {
      navbar: NavBar,
      default: diaTable
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/treeMenu',
    title: '树控件',
    name: 'treeMenu',
    components: {
      navbar: NavBar,
      default: treeMenu
    },
    meta: {
      keepAlive: false // 不需要缓存
    }
  }
]
