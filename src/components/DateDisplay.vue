<template>
  <span>{{date + ' ' + time}}</span>
</template>

<script>

export default {
  data(){
    return{
      time: '',
      date: ''
    }
  },
  beforeMount(){
    this.updateTime();
  },
  methods:{
    getTime(){
      //this.time= new Date();
      //console.log('e');
      const currentTime = new Date();
      //this.time =  currentTime.

      //const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
      const date = currentTime.toDateString();
      const time = currentTime.toTimeString();
      this.date = date.substring(0,date.lastIndexOf(' '));
      this.time = time.substring(0,time.lastIndexOf(':'));
      //const e = currentTime.toTimeString();
      //this.time = e;



      //this.time = new Date();
    },
    updateTime(){
      //console.log("script running")
      this.getTime();
      setInterval(this.getTime,1000);
    },

  }


};
</script>

<style scoped>
</style>
