<template>
    <div class="tab">
        <div class="nav-wrapper">
            <div class="header">
                <img src="" class="nav-img">
                <div class="nav-bar">
                  <router-link to="/news" tag="a">首页</router-link>
                  <router-link to="/race" tag="a">比赛</router-link>
                  <router-link to="/video" tag="a">数据</router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  date() {
    return {};
  },
  mounted() {
    setTimeout(() => {}, 20);
  }
};
</script>

<style lang="css">

</style>
