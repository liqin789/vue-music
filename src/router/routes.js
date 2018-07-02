import NavBar from "@/components/nav-bar/index.vue"

let NewSong = ()=>import("@/views/new-song/new-song")


export let routes = [
      {
          path:'/',
          title:'新歌',
          name:'NewSong',
          components:{
             navBar:"NavBar",
             default:"NewSong"
          }
      }
]