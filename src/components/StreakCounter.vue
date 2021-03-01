<template>
  <!--Add way to access the method streakcheck() here-->
  <span>
    {{streakCheck(streak)}} Streak
  </span>
</template>

<script>
export default {
  props:['completedTasks'],
  data(){
    return{
      streak:0,
      tasks:0,
      streakFlag:true,
      savedDate:new Date('December 17, 1995 03:24:00'),
      currentDate: new Date(),
    }
  },
  methods:{
    streakCheck(streak){
      //check if the next day of the week,less than 1 week, and if it has not been incrimented today
      //add 1 to streak
      //else if streakflag is true do 
      /*if(streakFlag){
        if((this.savedDate != this.currentDate) & (this.currentDate.getTime()- this.savedDate.getTime()<86400000))
        {
          this.savedDate = this.currentDate;
          this.streak+=1;
        }
        else if(this.currentDate.getTime()- this.savedDate.getTime()>= 86400000){
          this.streak = 1;
        }
        else{this.streakFlag = false}
      }*/
      if(this.streakFlag){
        if(this.savedDate.toDateString() != this.currentDate.toDateString()){
          this.savedDate = this.currentDate;
          console.log(this.savedDate,"TrueSaved");
          console.log(this.currentDate,"TrueCurrent");
          this.streakFlag = false;
        }
      }
      else{
        this.streak +=1;
        this.streakFlag = true;
        this.currentDate = new Date();
        console.log(this.savedDate,"FalseSaved");
        console.log(this.currentDate,"FalseCurrent");
      }
      return streak;
    },
  } 
};
</script>

<style scoped>
</style>
