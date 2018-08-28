<template>
	<div class="loading">
		<img :src="loading" alt="正在加载中">
	</div>
</template>

<script>
export default {
  data() {
  	let loadImg = require("common/img/loading.gif")
  	return {
      loading: loadImg
  	}
  }
}
</script>

<style scoped lang="css" rel="stylesheet/stylus">
  .loading {
    width: 100%;
    height: auto;
    padding: 2rem 0;
    text-align: center;
  }
  .loading img{
   	width: 2rem;
   	height: 2rem;
  }
</style>