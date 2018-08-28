import axios from 'common/js/http'
import {BASEURL} from 'common/js/config'

var qs = require('qs')

// 获取各国联赛排行版
// 获取排行榜
export function getRank(type,league) {
    let url = ''
    if(type === "schedule"){
        url = `/data/${type}/?round_id=${league.id}&gameweek=${league.gameweek}`
    }else{
        url = `/data/${type}/${league.league}`
    }
    return axios.get(url).then((res) => {
        return Promise.resolve(res)
    })
  }

