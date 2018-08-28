<template>
    <div class="tab">
        <div class="nav-wrapper">
            <div class="header">
                <img src="" class="nav-img">
                <div class="nav-bar">
                  <router-link to="/" tag="a">首页</router-link>
                  <router-link to="/race" tag="a">比赛</router-link>
                  <router-link to="/data" tag="a">数据</router-link>
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

<style scoped lang="css">
.nav-wrapper{
    position: relative;
    height: 35px;
    z-index: 30;
    width: 100%;
    top: 0;
}
.header {
    height: 2.5rem;
    background-color: #16b13a;
    color: #fff;
    position: relative;
    display: box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.nav-img{
    width: 3.83rem;
    position: absolute;
    left: .95rem;
    top: 50%;
    -ms-transform: translateY(-45%);
    transform: translateY(-45%);
    -webkit-transform: translateY(-45%);
}
.nav-bar{
    height: 100%;
    width: 70%;
    display: table;
    float: right;
}
.header a{
    font-size: 1rem;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    position: relative;
}
.header a.link-active{
    color: #fff;
}
.header a, a:hover, a:visited {
    color: #fff;
}
.header .link-active:after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    margin-left: -5px;
}
</style>
