<template>
  <div class='add-task'>
    <header>
      <h3>Add Task</h3>
      <div class="dropdown-container">
        <div class="dropdown-wrapper">
          <img id="gems-img" title="Add Gems" src="../assets/197-diamond.png" class="img-btn" @click="toggleGemDropdown" />
          <div class="dropdown-content" v-show="isGemDropdownVisible">
            <input type="number" :min="minGems" :max="maxGems" v-model="task.gems" />
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
      <select @click="hideDropdowns" @input="getProjectSelection">
        <option disabled hidden selected>Select Project</option>
        <option v-for="project in projects" :value="project.id" :key="project.id">{{ project.name }}</option>
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
      minGems: 1,
      maxGems: 20,
      task: {
        name: '',
        comment: '',
        projectId: 0,
        gems: 1,
      },
      isCommentDropdownVisible: false,
      isGemDropdownVisible: false,
    };
  },
  methods: {
    addTask() {
      if (this.task.name) {
        if (this.task.projectId) {
          if (this.task.gems >= this.minGems && this.task.gems <= this.maxGems) {
            this.task.projectId = Number(this.task.projectId);
            this.$emit('add-task', this.task);
            this.task.name = '';
            this.task.comment = '';
            this.task.gems = 1;
            this.hideDropdowns();
          } else {
            alert(`Amount of gems must be between ${this.minGems} and ${this.maxGems}`);
          }
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
    },
    getProjectSelection(event) {
      this.task.projectId = event.target.value;
    },
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

input,
select {
  border-radius: 5px;
  border-style: none;
  width: 70%;
  padding: 7px;
  background: #f0f0f0;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  color: #585858;
}

form {
  display: flex;
  justify-content: space-between;
}

form button {
  border-radius: 3px;
  color: #f0f0f0;
  font-weight: bold;
  width: 4rem;
  padding: 5px;
  background-color: #ff7f27;
  box-shadow: 0 0 3px black;
  border-style: none;
}

form button:hover {
  background-color: #ffa465;
}

form button:active {
  background-color: #ff7f27;
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
  width: 140px;
  font-weight: bold;
}
</style>
