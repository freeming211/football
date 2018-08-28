<template>
  <div class="detail">
    <div class="header">
      <i class="iconfont icon-fanhui" @click="back"></i>
      最新资讯
    </div>
    <div class="demo-iframe-holder">
      <iframe :src="url" frameborder="0" name="test" id="dom01" :height="fHeight"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
  	date() {
  	 return {
       
  	  }
  	},
    computed: {
      url() {
        let id = this.$route.params.id
        // return `http://www.dongqiudi.com/share/article/${id}?id=${id}&type=undefined&refer=m_website`
        return `http://www.dongqiudi.com/share/article/${id}`
      },
      fHeight() {
        return window.innerHeight
      }
    },
    methods: {
      back(){
        this.$router.push({ name: 'news'});
      },
    },
  }
</script>

<style scoped lang="css">
.header{
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 1.2rem;
    text-align: center;
    color: #ffffff;
    background: #16b13a;
    position: relative;
    color: #fff;
}
.icon-fanhui{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    padding: 0 .8rem;
    z-index: 20;
    color: #fff;
}
.detail{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}
.demo-iframe-holder {  
  position: fixed;   
  right: 0;   
  bottom: 0;   
  left: 0;  
  top: 35px;  
  -webkit-overflow-scrolling: touch;  
  overflow-y: scroll;  
}  
  
.demo-iframe-holder iframe {  
  height: 100%;  
  width: 100%;  
} 
</style>