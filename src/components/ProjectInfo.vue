<template>
  <li v-on:click="projectSelected">
    <div class="dropdown-wrapper">
      <img class="options-img" :src="iconSrc" @click.stop="toggleOptionsDropdown"/>
      <ul class="options-dropdown-content dropdown-content" v-if="isOptionsDropdownVisible && project.showOptions">
        <li @click="renameProject">Rename</li>
        <li @click="removeProject">Remove</li>
      </ul>
    </div>
    <span :style="listStyles">{{ project.name.charAt(0).toUpperCase() + project.name.slice(1) }}</span>
  </li>
</template>

<script>
export default {
  props:['project'],
  emits:['project-selected', 'remove-project', 'rename-project'],
  data() {
    return {
      isOptionsDropdownVisible: false,
    };
  },
  methods:{
    hideDropdowns() {
      this.isOptionsDropdownVisible = false;
    },
    projectSelected() {
      this.$emit('project-selected', this.project.id);
    },
    toggleOptionsDropdown() {
      this.isOptionsDropdownVisible = !this.isOptionsDropdownVisible;
    },
    renameProject() {
      let newName = prompt('Edit Project Name', this.project.name);
      if (newName !== null) {
        this.$emit('rename-project', this.project.id, newName);
      }
      this.hideDropdowns();
    },
    removeProject() {
      this.hideDropdowns();
      let confirmed = confirm('This will delete all tasks that belong to the project. Are you sure?');
      if (confirmed) {
        this.$emit('remove-project', this.project.id);
      }
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
.dropdown-wrapper {
  display: flex;
  align-items: center;
}

.dropdown-content {
  top: 20px;
  left: 0;
}
</style>
