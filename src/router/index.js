import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news'
import newsDetail from '@/components/newsDetail'
import Race from '@/components/race'
import Data from '@/components/data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: news,
      meta:{keepAlive: true}
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail,
      meta:{keepAlive: false}
    },
    {
      path: '/race',
      name: 'race',
      component: Race,
      meta:{keepAlive: true}
    },
    {
      path: '/data',
      name: 'data',
      component: Data,
      meta:{keepAlive: true}
    }
  ]
})
