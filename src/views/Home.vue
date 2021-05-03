<template>
  <div id="home">
    {{data}}
  </div>
</template>
<script>
export default ({
  name: "Home",
  data() {
    return{
      data: {}
    }
  },
  beforeMount(){
    this.getStats();
  },
  methods:{
    async getStats(){
       await fetch("https://covid-19-statistics.p.rapidapi.com/reports?q=US%20Alabama&region_name=US&iso=USA&region_province=Alabama", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4e9ad7e5a5msh0a57503ac951c9dp1d772fjsn68cba4b29124",
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(function (data) {
                this.data=data;
            })
    }
  }
})
</script>
