<template>
  <li v-on:click="projectSelected">
    <img :src="iconSrc" />
    <span :style="listStyles">{{ project.name.charAt(0).toUpperCase() + project.name.slice(1) }}</span>
  </li>
</template>

<script>
export default {
  props:['project'],
  emits:['project-selected'],
  methods:{
    projectSelected() {
      this.$emit('project-selected', this.project);
    },
  },
  computed: {
    iconSrc() {
      const images = require.context('../assets', false, /\.png$/);
      const pic = this.project.isSelected ? this.project.imageClicked : this.project.imageDefault;
      return images(`./${pic}`);
    },
    listStyles() {
      let styles;
      if (this.project.isSelected) {
        styles = {
          color: '#ff8b90',
          'font-weight': 'bold',
        };
      } else {
        styles = { color: '#f0f0f0' };
      }
      return styles;
    },
  },
};
</script>

<style scoped>
</style>
