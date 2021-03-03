<template>
    <li class="task-list">
      <img class="li-item check-img" src="../assets/059-success.png" @click="completeTask"/>
      <div class="li-item task-name">{{ task.name }}</div>
      <div class="li-item task-project dropdown-wrapper">
        <select @input="getProjectSelection" @click="hideDropdowns">
          <option disabled hidden selected>{{ task.project.name }}</option>
          <option v-for="project in projects" :key="project.id">{{ project.name }}</option>
        </select>
      </div>
      <div class="li-item stats-wrapper">
        <div class="stats-item dropdown-wrapper" >
          <div class="dropdown-info gems-content" @click="toggleGemDropdown">
            <img class="gems-img" src="../assets/197-diamond.png" />
            <span class="task-gems">{{ task.gems }}</span>
          </div>
          <div class="dropdown-content" v-if="isGemDropdownVisible">
            <input type="number" :min="minGems" :max="maxGems" v-model="gems" />
            <button @click="editGems">Ok</button>
          </div>
        </div>
      </div>
      <div class="li-item dropdown-wrapper">
        <img class="options-img" src="../assets/316-more.png" @click="toggleOptionsDropdown"/>
        <ul class="options-dropdown-content dropdown-content" v-if="isOptionsDropdownVisible">
          <li @click="renameTask">Rename</li>
          <li @click="editComment">Comment</li>
          <li @click="$emit('remove-task', task.id)">Remove</li>
        </ul>
      </div>
    </li>
</template>

<script>
export default {
  emits: [
    'complete-task',
    'select-task-project',
    'edit-gems',
    'edit-comment',
    'remove-task',
    'rename-task',
  ],
  props: ['task', 'projects'],
  data() {
    return {
      minGems: 1,
      maxGems: 20,
      gems: 1,
      comment: '',
      name: '',
      projectSelection: {},
      isGemDropdownVisible: false,
      isOptionsDropdownVisible: false,
      isTakeNameInputVisible: false,
    };
  },
  methods: {
    completeTask() {
      this.hideDropdowns();
      this.$emit('complete-task', this.task.id);
    },
    getProjectSelection(event) {
      this.projectSelection = event.target.value;
    },
    toggleGemDropdown() {
      this.isGemDropdownVisible = !this.isGemDropdownVisible;
      this.isOptionsDropdownVisible = false;
    },
    toggleOptionsDropdown() {
      this.isOptionsDropdownVisible = !this.isOptionsDropdownVisible;
      this.isGemDropdownVisible = false;
    },
    hideDropdowns() {
      this.isGemDropdownVisible = false;
      this.isOptionsDropdownVisible = false;
    },
    editGems() {
      if (this.gems >= this.minGems && this.gems <= this.maxGems) {
        this.$emit('edit-gems', this.task.id, this.gems);
      } else {
        alert(`Amount of gems must be between ${this.minGems} and ${this.maxGems}`);
      }
      this.gems = 0;
      this.toggleGemDropdown();
    },
    editComment() {
      this.hideDropdowns();
      this.comment = prompt('Edit Comment', this.task.comment);
      if (this.comment !== null) {
        this.$emit('edit-comment', this.task.id, this.comment);
      }
    },
    renameTask() {
      this.hideDropdowns();
      this.name = prompt('Edit Task Name', this.task.name);
      if (this.name !== null) {
        this.$emit('rename-task', this.task.id, this.name);
      }
    },
    toggleTaskNameInput() {
      this.isTaskNameInputVisible = !this.isTakeNameInputVisible;
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

.task-list {
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
  font-family: 'Fira Code', monospace;
  font-size: 1.3em;
  font-weight: 500;
  color: #585858;
  margin-right: auto;
  margin-left: 20px;
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

.dropdown-content {
  top: 20px;
}

.options-dropdown-content {
  top: 40px;
  right: 10px;
}

select {
  appearance: none;
  outline: none;
  border: none;
  background-color: black;
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: inherit;
  width: 10em;
  text-align: center;

}

select option {
  font-family: inherit;
  background-color: #585858;
}
</style>
