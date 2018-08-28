<template>
    <div class="tab">
      <Country-list></Country-list>
    </div>
</template>

<script>
import CountryList from 'page/rank/CountryList'
  export default {
  	date() {
  	 return {
       
  	  }
  	},
    created(){
      console.log("进去race")
    },
    methods: {
      back(){
        history.back()
      },
    },
    components:{
      CountryList
    }
  }
</script>