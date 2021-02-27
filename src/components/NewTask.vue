<template>
  <div class='add-task'>
    <header>
      <h3>Add Task</h3>
      <div class="dropdown-wrapper">
        <p>icon1</p>
        <p>icon2</p>
        <p>icon3</p>
      </div>
    </header>
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
      if (this.taskInput) {
        this.$emit('add-task', this.taskInput);
        this.taskInput = '';
      }
    },
  },
};
</script>

<style scoped>
.add-task {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: auto;
  padding: 12px;
  width: 50rem;
  text-align: center;
  margin-bottom: 4rem;
  background-color: #0ed145;
}

header {
  display: flex;
  justify-content: space-between;
}

input {
  border-radius: 5px;
  border-style: none;
  width: 80%;
  padding: 3px;
}

button {
  border-radius: 3px;
  width: 4rem;
  padding: 5px;
}

.dropdown-wrapper {
  display: flex;
}

form {
  display: flex;
  justify-content: space-around;
}
</style>
