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
      const now = new Date();
      const oneDay = 86400000;

      if (this.streak.length > 0) {
        let delta = now.getTime() - this.streak[0].getTime();
        if (delta > oneDay) {
          this.streak = [new Date()];
        } else {
          this.streak.unshift(now);
        }
      } else {
        this.streak.unshift(now);
      }
    },
  },
  watch: {
    tasksToday(value) {
      const dailyGoal = 1;
      const goalMet = dailyGoal === value;
      if (goalMet) this.checkStreak();
    },
  },
};
</script>

<style scoped>
</style>
