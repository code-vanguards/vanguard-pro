<template>
  <span>
    <!--<img title="Stat Counters" src="../assets/023-archive.png" class="stat-icon"/>-->
    {{stat.uncompletedTasks}} uncompleted
    <!--<img title="Stat Counters" src="../assets/023-archive.png" class="stat-icon"/>-->
    {{stat.completedTasks}} completed
    <!--<img title="Stat Counters" src="../assets/023-archive.png" class="stat-icon"/>-->
    {{stat.gems}} gems
  </span>


</template>

<script>
export default {

  props:['stat'],
  data(){
    return{
  };
  },
  methods:{
  },
};
</script>

<style scoped>
</style>
