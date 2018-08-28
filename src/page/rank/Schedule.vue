<template>
    <div class="team">
        <table style="width:100%">
            <thead>
                <tr>
                    <td width="20%">比赛时间</td>
                    <td width="40%">主队</td>
                    <td width="40%">客队</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "item in team" :key="item.id">
                    <td>
                        {{item.date_utc}}
                        <p>{{item.time_utc}}</p>
                        <!-- <img v-lazy="'//img.dongqiudi.com/data/pic/'+item.team_id+'.png'"/> -->
                        </td>
                    <td>
                      <span><img :src="'//img.dongqiudi.com/data/pic/'+item.team_A_id+'.png'"/></span>  {{item.team_A_name}}
                    </td>
                    <td>
                      <span><img :src="'//img.dongqiudi.com/data/pic/'+item.team_B_id+'.png'"/></span>{{item.team_B_name}}
                    </td>
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
.team table tbody tr td p{
    font-size: 10px
}
</style>
