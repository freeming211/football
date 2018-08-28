<template>
    <div class="team">
        <table style="width:100%">
            <thead>
                <tr>
                    <td width="15%"></td>
                    <td width="20%">球队</td>
                    <td width="10%">场</td>
                    <td width="10%">胜</td>
                    <td width="10%">平</td>
                    <td width="10%">负</td>
                    <td width="15%">进/失</td>
                    <td width="10%">积分</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "(item,index) in team" :key="item.id">
                    <td>
                        {{index+1}}
                        <img v-lazy="'//img.dongqiudi.com/data/pic/'+item.team_id+'.png'"/>
                        </td>
                    <td>{{item.club_name}}</td>
                    <td>{{item.matches_total}}</td>
                    <td>{{item.matches_won}}</td>
                    <td>{{item.matches_draw}}</td>
                    <td>{{item.matches_lost}}</td>
                    <td>{{item.goals_pro}}/{{item.goals_against}}</td>
                    <td>{{item.points}}</td>
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
