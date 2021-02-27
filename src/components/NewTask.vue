<template>
  <div class='add-task'>
    <h3>Add Task</h3>
    <form @submit.prevent="addTask">
      <input type="text" v-model="taskInput"/>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['add-task'],
  data() {
    return {
      taskInput: '',
    };
  },
  methods: {
    addTask() {
      this.$emit('add-task', this.taskInput);
      this.taskInput = '';
    }
  }
};
</script>

<style scoped>
.add-task {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: auto;
  width: 50rem;
  height: 5rem;
  text-align: center;
  margin-bottom: 4rem;
}
</style>
