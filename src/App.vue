<template>
  <div id="app">
    <mt-header fixed class="kugou-header">
        <router-link class="logo" to="/" slot="left">
            <img src="http://m.kugou.com/v3/static/images/index/logo.png" />
        </router-link>
        <mt-button @click="gotoSearch" icon="search" slot="right"></mt-button>
    </mt-header>
    <router-view class="navBar" name="navbar" />

    <div class="content">
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
        path:'/search'
      })
    }
  }
}
</script>

<style>

</style>
