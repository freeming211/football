import axios from 'common/js/http'

// 获取各国联赛列表
export function getRaceType() {
  return axios.get('http://localhost:8080/static/race.json').then((res) => {
  	return Promise.resolve(res)
  })
}