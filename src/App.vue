<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view />-->
<!--    <index></index>-->
          <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    /*margin-top: 0px;*/
    /*float: top;*/
}

</style>
<script>
// import Index from "@/views/index";
// import Login from "@/views/firstmenu/Login";
import '@/css/global.css';

export default {
  components: {}
}
</script>