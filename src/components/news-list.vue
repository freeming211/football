<template>
  <scroll class="new-content" :data="newsList" ref="scroll" :pullup="true" :pulldown="true" v-on:scrollToEnd="_getNews" v-on:pulldown="_pulldown" :listen-scroll="true" :probe-type="2" @scroll="scroll">
    <ul class="news-list">
      <li class="news-list-item" v-for="item in newsList" @touchstart="onShortcutTouchStart" @click="selectItem(item.id)">
        <a>
          <div class="news-list-img-side">
            <img v-lazy="item.litpic" alt="">
          </div>
          <div class="news-list-info">
            <h3>{{item.title}}</h3>
            <div class="news-list-tag">
              <span class="news-list-comment" v-html="item.comments_total+'评论'">
              </span>
            </div>
          </div>
        </a>
      </li>
      <div v-show="newsList.length" class="more" v-html="more"></div>
    </ul>
    <Loading v-show="!newsList.length"></Loading>
  </Scroll>
</template>

<script>
import Loading from "base/loading/loading";
import Scroll from "base/scroll/scroll";
import { getNews } from "@/api/news.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      page: 0,
      loadingMore: false,
      newsList: [],
      more: "加载更多..."
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    },
    scroll(pos) {
      console.log(pos);
    },
    //上拉加载更多
    _getNews() {
      if (this.loadingMore) {
        return;
      }
      getNews(++this.page).then(res => {
        if (res.statusText === "OK") {
          // console.log(res);
          this.newsList = this.newsList.concat(res.data.list.articles);
          if (res.data.page > 1 && res.data.list.articles.length < 1) {
            this.loadingMore = true;
            this.pullNews = false;
          }
          if (res.data.list.articles.length < 15) {
            this.more = "无更多内容";
            this.pullNews = false;
          }
        }
      });
    },
    onShortcutTouchStart(e) {
      console.log(e);
    },
    // 下拉刷新
    _pulldown() {
      this.newsList = []
      getNews(1).then(res => {
        if (res.statusText === "OK") {
          console.log(res)
          this.newsList = this.newsList.concat(res.data.list.articles);
          if (res.data.page > 1 && res.data.list.articles.length < 1) {
            this.loadingMore = true;
            this.pullNews = false;
          }  
        }
      });
      setTimeout(() => {
        this.pullNews = false;
      }, 1000);
    }
  },
  created() {
    this._getNews();
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pull-news {
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.new-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  z-index: 99;
}
</style>
