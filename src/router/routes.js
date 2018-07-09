
let NavBar = ()=>import('@/components/nav-bar/index')//导航
let NewSong = ()=>import('@/views/new-song/new-song')//新歌
let Plist = ()=>import('@/views/plist/plist')//歌单
let Singer = ()=>import('@/views/singer/singer')//歌手
let Search = ()=>import('@/views/search/search')//搜索

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
        path:'/Search',
        title:'搜索',
        name:'Search',
        component:Search
    }
    
]