<template>
  <div id="app">
    <mt-header fixed class="kugou-header">
        <router-link class="logo" to="/" slot="left">
            <img  style="height:5vh;display:none" src="http://m.kugou.com/v3/static/images/index/logo.png" />
        </router-link>
        <mt-button @click.native="gotoSearch" icon="search" slot="right"></mt-button>
    </mt-header>
    <div class="content">
        <router-view class="navBar" name="navbar" />
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods:{
    gotoSearch(){
      this.$router.push({
         path:'/Search'
      })
    }
  }
}
</script>

<style scrope>
  .kugou-header{
    height: 5vh;
  }
  .content{
    margin-top: 5vh;
  }
</style>
