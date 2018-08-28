<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">

    </router-view>
  </div>
</template>

<script>
import Header from 'base/header/header'
export default {
  name: "App",
  components:{
    Header
  }
};
</script>

<style>
#app {

}
</style>
