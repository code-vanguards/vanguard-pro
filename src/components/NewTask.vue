<template>
  <div class='add-task'>
    <header>
      <h3>Add Task</h3>
      <div class="dropdown-container">
        <div class="dropdown-wrapper">
          <button @click="toggleCommentDropdown">Comment</button>
          <div class="dropdown-content" v-show="isCommentDropdownVisible">
            <input type="text" v-model="task.comment" />
            <button @click="toggleCommentDropdown">Ok</button>
          </div>
        </div>
        <div class="dropdown-wrapper">
          <button @click="toggleProjectDropdown">Project</button>
          <div class="dropdown-content" v-show="isProjectDropdownVisible">
            <input type="text" v-model="task.project" />
            <button @click="toggleProjectDropdown">Ok</button>
          </div>
        </div>
        <p>icon3</p>
      </div>
    </header>
    <form @submit.prevent="addTask">
      <input type="text" @click="hideDropdowns" v-model="task.name"/>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['add-task'],
  data() {
    return {
      task: {
        name: '',
        comment: '',
        project: '',
      },
      isCommentDropdownVisible: false,
      isProjectDropdownVisible: false,
    };
  },
  methods: {
    addTask() {
      if (this.task.name) {
        this.$emit('add-task', this.task);
        this.task.name = '';
        this.task.comment = '';
        this.hideDropdowns();
      } else {
        alert('Please enter a task.');
      }
    },
    hideDropdowns() {
      this.isProjectDropdownVisible = false;
      this.isCommentDropdownVisible = false;
    },
    toggleCommentDropdown() {
      this.isCommentDropdownVisible = !this.isCommentDropdownVisible;
      this.isProjectDropdownVisible = false;
    },
    toggleProjectDropdown() {
      this.isProjectDropdownVisible = !this.isProjectDropdownVisible;
      this.isCommentDropdownVisible = false;
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.add-task {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: #f0f0f0;
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
  background: #f0f0f0;
}

button {
  border-radius: 3px;
  width: 4rem;
  padding: 5px;
}

.dropdown-container {
  margin-right: 8rem;
  display: flex;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-content {
  position: absolute;
  background-color: black;
  width: 10rem;
}

form {
  display: flex;
  justify-content: space-around;
}
</style>
