<template>
  <li>
    <button v-on:click="filter"> {{project.name}}</button>
  </li>
</template>

<script>
export default {
  props:['project'],
  emits:['projectFilter'],
  methods:{
    filter(){
      //console.log('worked');
      this.$emit('projectFilter',this.project)
    },   
  }
};
</script>

<style scoped>
</style>
