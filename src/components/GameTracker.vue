<template>
  <span hidden></span>
</template>

<script>
export default {

  beforeMount(){
    this.startSteam();
  },

  methods:{
    
    startSteam(){
      console.log('snoopingas')
      this.retrieveInfo();
      setInterval(this.retrieveInfo,300000);
    },
    retrieveInfo(){
      console.log('its working');
      const key = "2FCA2BF846002C36C45300F0299645BE";
      const profileID = "76561198050490125"; 
      const query = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${profileID}`;
      /*
      fetch(query).then(response => {
        return response.json();
      }).then(users => {
        console.log(users)
      })
      */
      
      let request = new XMLHttpRequest();
      request.open("GET",query);
      request.setRequestHeader('Access-Control-Allow-Origin','http://localhost:8082');
      
      request.send();

      request.onload = () => {
        console.log(request);
        if(request.status === 200) {
          console.log(JSON.parse(request.response));
        }else{
          console.log(`error ${request.status} ${request.statusText}`);
        }

      }
      

    },
  },


};
</script>

