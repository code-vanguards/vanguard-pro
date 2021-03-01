<template>
  <span>{{ streak.length }}</span>
</template>

<script>
//import { toDate } from '../lib/helpers.js';

export default {
  props: {
    completedTasksToday: {
      type: Number,
      required: true,
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
          this.streak = [];
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
    completedTasksToday(value) {
      console.log(`In completedTasksToday() watcher`);
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
