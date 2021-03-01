<template>
  <li v-on:click="filter">
    {{ project.name.charAt(0).toUpperCase() + project.name.slice(1) }}
  </li>
</template>

<script>
export default {
  props:['project'],
  emits:['projectFilter'],
  methods:{
    filter(){
      //console.log('worked');
      this.$emit('projectFilter',this.project);
    },
  }
};
</script>

<style scoped>
li {
  list-style: none;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  color: #f0f0f0;
  font-family: 'Jost', sans-serif;
  font-size: 1.3rem;
  user-select: none;
}

li:hover {
  background-color: #009ee4;
}
</style>
