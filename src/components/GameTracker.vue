<template>
  <!--<p
    v-for="playDay in PlayTimeDays"
    :key="playDay.date"
  >
    {{playDay.date}}: {{playDay.minutesPlayed}}

  </p>-->
  Minutes played today: {{PlayTimeDays[0].minutesPlayed}}
</template>

<script>
export default {

  emits: ['apply-gem-penalty'],
  beforeMount(){
    this.startSteam();
  },
  data(){
    return{
      PlayTimeDays: [
        {
          date: new Date().toDateString(),
          minutesPlayed: 0.0,
        },
        {
          date: new Date(Date.parse('2021-02-21')+20000000).toDateString(),//new Date( Date.parse('2021-02-27')).toDateString(),
          minutesPlayed: 50.0,

        }

      ],
      
      //playTime: '',
    }
  },
  methods:{

    startSteam(){
      //new Date()
      //console.log(this.PlayTimeDays[1].date)
      this.retrieveInfo();
      setInterval(this.retrieveInfo,300000);//15000);//300000);//300000);//150000);//300000);
    },
    retrieveInfo(){
      const debug = false;

      /*
      //console.log('its working');

      //const key = "2FCA2BF846002C36C45300F0299645BE";
      //const profileID = "76561198050490125";
      //const query = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${profileID}`;
      //const query = "https://jsonplaceholder.typicode.com/users";
      //const query = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${key}&steamid=${profileID}&format=json`;

      
      const SteamAPI = require('steamapi');
      const steam = new SteamAPI(key);

      steam.getUserSummary(profileID).then(summary => {
        console.log(summary);
      })

      
      fetch("https://steamcommunity.com/id/mrbru3/").then(response => {
        return response.json();
      }).then(users => {
        console.log(users)
      })
      
    //const htmlDoc = '';
      
      fetch('https://percy.tech/hackathon/result.html')
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        console.log(template);
        //console.log('this is running');
    })
    .catch(function (response) {
        // "Not Found"
        console.log(response.statusText);
    });
      console.log(template);
      */

      let request = new XMLHttpRequest();
      request.open("GET","https://percy.tech/hackathon/result.html");
      //request.setRequestHeader('Access-Control-Allow-Origin','http://localhost:8082/');
      //request.setRequestHeader('Content-Type','application/json');
      request.send();

      request.onload = () => {
        //console.log(request);
        if(request.status === 200) { //if request was a success
          //console.log('request to steam user is a success');

          let str = request.response;
          let doc = new DOMParser().parseFromString(str, "text/html");
          let e = doc.getElementsByClassName('profile_in_game_header');
          //console.log(e.item(0));
          const userStatus = e.item(0).innerHTML;

          //if it is a new day create a new element at the start of the date array
          if(this.PlayTimeDays[0].date != new Date().toDateString())
          {
            console.log("E");
            this.PlayTimeDays.unshift({
              date: new Date().toDateString(),
              minutesPlayed: 0.0,

            })

            console.log(this.PlayTimeDays);
          }

          if( userStatus.includes('Currently In-Game'))
          {
            if (debug) console.log('USER IS IN A GAME');
            this.PlayTimeDays[0].minutesPlayed +=5
            if(this.PlayTimeDays[0].minutesPlayed >= 50) //start letting the person know they're reaching they're play limit
            {
              if(this.PlayTimeDays[0].minutesPlayed >= 60) //user has passed their limit
              {
                alert("You're playing too much! were gonna have to take some gems!")

                //remove 5 rupees for 5 minutes
                this.$emit('apply-gem-penalty', 5);
                

              }
              else
              {
              alert("You should stop playing soon, take a break and do something productive :)")
              }


              /*if(!this.PlayTimeDays[0].passedLimit) //
              {
                //
                alert("YOUVE PLAAYED TOO MUCH GO TO BED")
                this.PlayTimeDays[0].passedLimit = true;
              }*/
              //alert("YOUVE PLAAYED TOO MUCH GO TO BED")
            }
          }
          else{
            if (debug) console.log('USER IS NOT IN A GAME');
          }

        }else{
          console.log(`error ${request.status} ${request.statusText}`);
        }

      }
    },
  },


};
</script>
