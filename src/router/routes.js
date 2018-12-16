
let NavBar = ()=>import('@/components/nav-bar/index')//导航
let NewSong = ()=>import('@/views/new-song/new-song')//新歌
let Plist = ()=>import('@/views/plist/plist')//歌单
let Singer = ()=>import('@/views/singer/singer')//歌手
let Rank = ()=>import('@/views/rank/rank')//歌手
let Plan = ()=>import('@/views/plan/addPlan')//计划
let Layout = ()=>import('@/views/plan/layout')//布局


export let routes = [
      {
          path:'/',
          title:'新歌',
          name:'NewSong',
          components:{
            navbar:NavBar,
            default:NewSong
          }
      },
      {
        path:'/Plist',
        title:'歌单',
        name:'Plist',
        components:{
          navbar:NavBar,
          default:Plist
        }
    },
    {
        path:'/Singer',
        title:'歌手',
        name:'Singer',
        components:{
          navbar:NavBar,
          default:Singer
        }
    },
    {
        path:'/Rank',
        title:'排行',
        name:'Rank',
        components:{
          navbar:NavBar,
          default:Rank
        }
    },
    {
      path:'/Plan',
      title:'计划',
      name:'Plan',
      components:{
        navbar:NavBar,
        default:Plan
      }
   },
   {
    path:'/layout',
    title:'布局',
    name:'layout',
    components:{
      navbar:NavBar,
      default:Layout
    }
 }
    
]