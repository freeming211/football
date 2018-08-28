<template>
    <div class="">
        <!-- 国家 -->
        <ul class="country-ul clearfix">
            <li v-for="(item,index) in leagues" :key="item.id" :class="{'active-li':index==countryNum}" @click="oncountryBtn(item,index)">
                {{item.title}}
            </li>
        </ul>
        <!-- 数据 -->
        <ul class="shoot-ul clearfix">
            <li v-for="(item,index) in types" :key="item.id" :class="{'active-shoot':index==shootNum}" @click="onshootBtn(item,index)">
                {{item.title}}
            </li>
        </ul>

        <div class="rank">
            <Scroll ref="scroll" :data="boxList" class="rank-content">
              <div>
                <Team :team="boxList"  @updateScroll="freshScroll" v-if="shootNum == 0 && boxList.length"></Team>
                <Shoot :team="boxList"  @updateScroll="freshScroll" v-if="shootNum == 1 && boxList.length"></Shoot>
                <Assists :team="boxList"  @updateScroll="freshScroll" v-if="shootNum == 2 && boxList.length"></Assists>
                <schedule :team="boxList"  @updateScroll="freshScroll" v-if="shootNum == 3 && boxList.length"></schedule>
              </div>
              <Loading v-show="!boxList.length"></Loading>
            </Scroll>
        </div>
    </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Team from 'page/rank/team'
import Shoot from 'page/rank/shoot'
import Assists from 'page/rank/Assists'
import Schedule from 'page/rank/schedule'
import Loading from 'base/loading/loading'
import {getRank} from '@/api/data.js'
  export default {
  	data() {
     let newLeague = {title:'中超',league:51,id: 39713,gameweek: 30}    
  	 return {
       countryNum:0,
       shootNum:0,
       leagues: [{title:'中超',league:51,id: 39713,gameweek: 30},{title:'英超',league:8, id:41547,gameweek: 38},{title:'意甲',league:13,id: 42011,gameweek: 38},{title:'西甲',league:7,id: 41509,gameweek: 38},{title:'德甲',league:9,id:41485,gameweek: 38}],
       types: [{title:'积分榜',type:'team_ranking'},{title:'射手榜',type:'goal_ranking'},{title:'助攻榜',type:'assist_ranking'},{title:'赛程榜',type:'schedule'}],
       datas:[],
       //默认是中超
       league:newLeague,
       round_id:39713,
       gameweek:30,
       type:'team_ranking',
       boxList:[]
  	  }
  	},
    methods: {
      back(){
        history.back()
      },
      oncountryBtn(item,index){
          this.countryNum = index
          this.shootNum = 0
          this.type = 'team_ranking'
          this.league = item
          this._getRank()
      },
      onshootBtn(item,index){
          this.shootNum = index
          this.type = item.type
          this._getRank()
      },
      //team_ranking 这个是 代表积分榜 goal_ranking 射手榜 assist_ranking 助攻版 
      // schedule/?round_id=leagues里面的id&gameweek=leagues里面的gameweek
      _getRank(){
          this.boxList = []
          getRank(this.type,this.league).then(res=>{
              console.log(res)
              switch(this.type)
                {
                case 'team_ranking':
                    this.boxList = res.data[0].rankings
                break;
                case 'goal_ranking':
                    this.boxList = res.data
                break;
                case 'assist_ranking':
                    this.boxList = res.data
                break;
                case 'schedule':
                    this.boxList = res.data.matches
                break;
                default:
                console.log('获取失败')
                }
          })
      },
      freshScroll(){
          this.$refs.scroll.refresh()
          this.goTop()
      },
      //计算
      goTop(){
        this.$refs.scroll.scrollTo(0,0,0)
      }
    },
    created(){
     this._getRank()
    },
    components:{
        Scroll,
        Team,
        Shoot,
        Assists,
        Schedule,
        Loading
    }
  }
</script>

<style scoped>
/* 国家 */
.country-ul{
    background: #ffffff;
}
.country-ul li{
    float: left;
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    padding: 5px 0;
}
.active-li{
    border-bottom: 1px solid #16b13a;
    color: #16b13a;
}
/* 数据 */
.shoot-ul{
    background: #000;
}
.shoot-ul li{
    float: left;
    width: 25%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #414141;
    padding: 3px 0;
}
.active-shoot{
    color: #ffab5d !important;
    font-weight: 600;
}
.rank{
  position: fixed;
  bottom: 0;
  width: 100%;
  top:121px;
}
.rank .rank-content{
  height: 100%;
  overflow: hidden;
}
</style>
