<template>
  <div class="stat-item" id="game-tracker">
    <game-tracker
      @apply-gem-penalty="$emit('apply-gem-penalty', penalty)"
    ></game-tracker>
  </div>
  <div class="stat-item" id="uncompleted-stat">
    <img title="Stat Counters" src="../assets/058-error.png" class="stat-icon"/>
    <span>{{stat.uncompletedTasks}}</span>
  </div>
  <div class="stat-item" id="completed-stat">
    <img title="Stat Counters" src="../assets/059-success.png" class="stat-icon"/>
    <span>{{stat.completedTasks}}</span>
  </div>
  <div class="stat-item" id="gems-stat">
    <img title="Stat Counters" src="../assets/197-diamond.png" class="stat-icon"/>
    {{stat.gems}}
  </div>
</template>

<script>
export default {
  props:['stat'],
  emits:['apply-gem-penalty'],
};
</script>

<style scoped>
img {
  width:24px;
  height: 24px;
  margin-right: 5px;
}

.stat-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  height: 70%;
  border-bottom: 2px solid;
}

#gems-stat {
  margin-right: 0;
  border-color: pink;
}

#completed-stat {
  border-color: #13e84f;
}

#uncompleted-stat {
  border-color: #ec1c24;
}

#game-tracker {
  border-color: indigo;
}
</style>
