<template>
    <li v-if="filterRule">
      <img class="li-item check-img" src="../assets/059-success.png" @click="completeTask"/>
      <div class="li-item task-name">{{ task.name }}</div>
      <div class="li-item task-project dropdown-wrapper">
        <select @input="getProjectSelection">
          <option disabled hidden selected>{{ task.project.name }}</option>
          <option v-for="project in projects" :key="project.id">{{ project.name }}</option>
        </select>
      </div>
      <div class="li-item stats-wrapper">
        <div class="stats-item gems-content">
          <img class="gems-img" src="../assets/197-diamond.png" />
          <span class="task-gems">{{ task.gems }}</span>
        </div>
      </div>
      <img class="li-item options-img" src="../assets/316-more.png" />
    </li>
</template>

<script>
export default {
  emits: ['complete-task', 'select-task-project'],
  props: ['task', 'projects'],
  data() {
    return {
      projectSelection: {},
    };
  },
  methods: {
    completeTask() {
      this.$emit('complete-task', this.task.id);
    },
    getProjectSelection(event) {
      this.projectSelection = event.target.value;
    },
  },
  computed: {
    filterRule() {
      return !this.task.isCompleted;
    },
  },
  watch: {
    projectSelection(value) {
      const theProject = this.projects.find(proj => proj.name === value);
      this.$emit('select-task-project', this.task.id, theProject);
    },
  },
};
</script>

<style scoped>
img {
  user-select: none;
  width: 32px;
}

li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}

.check-img {
  float:left;
  clear: left;
}

.task-name {
  margin-left: 20px;
  margin-right: auto;
}

.task-project {
  background-color: black;
  margin-right: 20px;
  color: #f0f0f0;
  padding: 10px;
  border-radius: 20px;
}

.stats-wrapper {
  margin-right: 25px;
}

.stats-wrapper img {
  width: 20px;
}

.stats-item {
  display: flex;
  align-items: center;
}

.gems-content span {
  margin-left: 5px;
}

select {
  appearance: none;
  outline: none;
  border: none;
  background-color: black;
  font-style: inherit;
  color: inherit;
}
</style>
