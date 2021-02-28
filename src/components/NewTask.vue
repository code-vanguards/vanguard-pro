<template>
  <div class='add-task'>
    <header>
      <h3>Add Task</h3>
      <div class="dropdown-container">
        <div class="dropdown-wrapper">
          <img id="gems-img" title="Add Gems" src="../assets/197-diamond.png" class="img-btn" @click="toggleGemDropdown" />
          <div class="dropdown-content" v-show="isGemDropdownVisible">
            <input type="number" v-model="task.gems" />
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
        <div class="dropdown-wrapper">
          <img title="Add Project" src="../assets/023-archive.png" class="img-btn" @click="toggleProjectDropdown" />
          <div class="dropdown-content" v-show="isProjectDropdownVisible">
            <input type="text" v-model="task.projectName" />
            <button @click="toggleProjectDropdown">Ok</button>
          </div>
        </div>
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
        projectName: '',
        gems: 0,
      },
      isCommentDropdownVisible: false,
      isProjectDropdownVisible: false,
      isGemDropdownVisible: false,
    };
  },
  methods: {
    addTask() {
      if (this.task.name) {
        this.$emit('add-task', this.task);
        this.task.name = '';
        this.task.comment = '';
        this.task.projectName = '';
        this.task.gems = 0;
        this.hideDropdowns();
      } else {
        alert('Please enter a task.');
      }
    },
    hideDropdowns() {
      this.isProjectDropdownVisible = false;
      this.isCommentDropdownVisible = false;
      this.isGemDropdownVisible = false;
    },
    toggleCommentDropdown() {
      this.isCommentDropdownVisible = !this.isCommentDropdownVisible;
      this.isProjectDropdownVisible = false;
      this.isGemDropdownVisible = false;
    },
    toggleProjectDropdown() {
      this.isProjectDropdownVisible = !this.isProjectDropdownVisible;
      this.isCommentDropdownVisible = false;
      this.isGemDropdownVisible = false;
    },
    toggleGemDropdown() {
      this.isGemDropdownVisible = !this.isGemDropdownVisible;
      this.isProjectDropdownVisible = false;
      this.isCommentDropdownVisible = false;
    }
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
  margin-right: 8rem;
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

.dropdown-content input {
}

.dropdown-content textarea {
  resize: none;
  width: 80%;
}

.dropdown-content button {
  width: 30%;
}

form {
  display: flex;
  justify-content: space-around;
}

#gems-img {
  width: 16px;
  margin-right: 3px;
}
</style>
