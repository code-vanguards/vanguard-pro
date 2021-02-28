<template>
  <div class='add-task'>
    <header>
      <h3>Add Task</h3>
      <div class="dropdown-container">
        <div class="dropdown-wrapper">
          <img id="gems-img" title="Add Gems" src="../assets/197-diamond.png" class="img-btn" @click="toggleGemDropdown" />
          <div class="dropdown-content" v-show="isGemDropdownVisible">
            <input type="number" min="0" max="10" v-model="task.gems" />
            <button @click="toggleGemDropdown">Ok</button>
          </div>
        </div>
        <div class="dropdown-wrapper">
          <img title="Add Comment" src="../assets/053-speech-bubble.png" class="img-btn" @click="toggleCommentDropdown" />
          <div class="dropdown-content" v-show="isCommentDropdownVisible">
            <textarea type="text" v-model="task.comment" />
            <button @click="toggleCommentDropdown">Ok</button>
          </div>
        </div>
      </div>
    </header>
    <form @submit.prevent="addTask">
      <input type="text" @click="hideDropdowns" v-model="task.name"/>
      <select @click="hideDropdowns" v-model="task.projectName">
        <option disabled selected>Select a Project</option>
        <option v-for="project in projects" :key="project.id">{{ project.name }}</option>
      </select>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['add-task'],
  props: ['projects'],
  data() {
    return {
      task: {
        name: '',
        comment: '',
        projectName: '',
        gems: 0,
      },
      isCommentDropdownVisible: false,
      isGemDropdownVisible: false,
    };
  },
  methods: {
    addTask() {
      if (this.task.name) {
        if(this.task.projectName) {
          this.$emit('add-task', this.task);
          this.task.name = '';
          this.task.comment = '';
          this.task.projectName = '';
          this.task.gems = 0;
          this.hideDropdowns();
        } else {
          alert("Please select a project. Create a new project if needed.");
        }
      } else {
        alert('Please enter a task.');
      }
    },
    hideDropdowns() {
      this.isCommentDropdownVisible = false;
      this.isGemDropdownVisible = false;
    },
    toggleCommentDropdown() {
      this.isCommentDropdownVisible = !this.isCommentDropdownVisible;
      this.isGemDropdownVisible = false;
    },
    toggleGemDropdown() {
      this.isGemDropdownVisible = !this.isGemDropdownVisible;
      this.isCommentDropdownVisible = false;
    }
  },
  watch: {
    projectName(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
.add-task {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: #f0f0f0;
  margin: auto;
  padding: 12px 30px;
  width: 50rem;
  text-align: center;
  margin-bottom: 4rem;
  background-color: #0ed145;
}

header {
  display: flex;
  align-items: center;
}

input {
  border-radius: 5px;
  border-style: none;
  width: 70%;
  padding: 3px;
  background: #f0f0f0;
}

form {
  display: flex;
  justify-content: space-between;
}

form button {
  border-radius: 3px;
  width: 4rem;
  padding: 5px;
  background-color: #c4ff0e;
  box-shadow: 0 0 3px;
  border-style: none;
}

form button:hover {
  background-color: lightblue;
}

form button:active {
  background-color: #1d58fe;
}

.dropdown-container {
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #585858;
  border-radius: 10px;
  padding: 10px;
  width: 10rem;
  right: 0;
}

.dropdown-content textarea {
  resize: none;
  width: 80%;
}

.dropdown-content button {
  width: 30%;
}

#gems-img {
  width: 16px;
  margin-right: 3px;
}

select {
  appearance: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  border: none;
  outline: none;
  color: black;
}
</style>
