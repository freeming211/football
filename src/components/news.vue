<template>
  <div class="new">
    <news-list @select = "onDetail"></news-list>
  </div>
</template>

<script>
import newsList from "@/components/news-list"
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      page: 0,
      loadingMore: false,
      newsList: []
    };
  },
  methods: {
    onDetail(id) {
      this.$router.push({ name: "newsDetail", params: { id: id } });
    }
  },
  created() {
  },
  components: {
    newsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new {
  position: fixed;
  top: 40px;
  bottom: 0;
  width: 100%;
}
.line-list img {
  width: 100%;
  height: auto;
}
.noData {
  text-align: center;
  color: beige;
}
.news-list-item {
  border-bottom: 1px solid #e9e9e9;
  position: relative;
}
.news-list-item a {
  padding: 0.75rem;
  border-bottom: 1px solid #e9e9e9;
  background: #f7f7f7;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  overflow: hidden;
  min-height: 4.2rem;
}
.news-list-img-side {
  width: 5.6rem;
  float: left;
  margin-right: 1rem;
  position: relative;
  line-height: 0;
  margin-bottom: 0.2rem;
  height: 4.2rem;
}
.news-list-img-side img {
  width: 100%;
}
.news-list-info {
  overflow: hidden;
}
.news-list-info h3 {
  font-size: 1rem;
  line-height: 1.3rem;
  color: #333;
  margin-bottom: 0.3rem;
}
.news-list-tag {
  position: absolute;
  right: 0.75rem;
  bottom: 0.35rem;
  font-size: 0.6rem;
  line-height: 0.9rem;
}
.news-list-comment {
  color: #8c9399;
}
#goTop {
  text-align: center;
  line-height: 50px;
  font-size: 12px;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  z-index: 100;
  background: #333;
  color: aqua;
}
.more {
  font-size: 14px;
  text-align: center;
  padding: 0.4rem 0;
}
</style>
