<template>
    <div class="team">
        <table style="width:100%">
            <thead>
                <tr>
                    <td width="15%">排名</td>
                    <td width="40%">球员</td>
                    <td width="30%">球队</td>
                    <td width="15%">进球数</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "(item,index) in team" :key="item.id">
                    <td>
                        {{index+1}}
                        <img v-lazy="'//img.dongqiudi.com/data/pic/'+item.team_id+'.png'"/>
                        </td>
                    <td>{{item.name}}</td>
                    <td>{{item.team_name}}</td>
                    <td>{{item.count}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    props:{
        team: {
            type: Array,
            required: null
  	  }
    },
  	date() {
  	 return {
       
  	  }
  	},
    created(){
      
    },
    methods: {
      
    },
    watch: {
      team() {
        setTimeout(() => {
          this.$emit('updateScroll')
        }, 20)
      }
    },
  }
</script>
<style scoped>
.team{
    width: 100%
}
img{
    width: 16px;
    height: 16px;
}
.team table tr td{
    text-align: center;
    font-size:12px;
}
.team table  tr{
    border-bottom: 1px solid #c5c1c1;
}
.team table thead tr td{
    padding: 6px 0
}
.team table tbody tr td{
    padding: 8px 0
}
</style>
