<template>
  <span>{{ streak.length }}</span>
</template>

<script>
export default {
  props: {
    tasksToday: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      streak: [],
    };
  },
  methods: {
    checkStreak() {
      console.log('In addStreak()');
      const now = new Date();
      const oneDay = 86400000;

      if (this.streak.length > 0) {
        let delta = now.getTime() - this.streak[0].getTime();
        if (delta > oneDay) {
          console.log('You lost your streak!');
          this.streak = [new Date()];
        } else {
          console.log('You keep your streak!');
          this.streak.unshift(now);
        }
      } else {
        console.log('Array is empty. Adding streak...');
        this.streak.unshift(now);
      }
    },
  },
  watch: {
    tasksToday(value) {
      console.log('In StreakCounter, tasksToday() watcher');
      console.log(value);
      const dailyGoal = 1;
      const goalMet = dailyGoal === value;
      if (goalMet) this.checkStreak();
    },
  },
};
</script>

<style scoped>
</style>
