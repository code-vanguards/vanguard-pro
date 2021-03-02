<template>
  <header id="header-info">
    <div class="header-item" id="title-wrapper">
      <img src="./assets/vanguard-pro-logo-long-transparent.png"/>
    </div>
    <div class="header-item" id="game-tracker">
      <game-tracker
        @apply-gem-penalty="ApplyGemPenalty"
      ></game-tracker>
    </div>
    <div class="header-item" id="stat-counters">
      <stat-counters
        :stat="stats"
      ></stat-counters>
    </div>
    <div class="header-item" id="streak-counter">
      <img src="./assets/100-fire.png" />
      <streak-counter
        :tasksToday="completedTasksToday"
      ></streak-counter>
    </div>
    <div class="header-item" id="date-display">
      <date-display></date-display>
    </div>
  </header>
  <section id="left-panel">
    <div class="item projects-list">
      <new-project
        @add-project="addProject"
      ></new-project>
    </div>
    <ul class="item">
      <project-info class="list-item"
        v-for="project in projects.slice(0, 3)"
        :key="project.id"
        :project="project"
        @project-selected="projectSelected"
      ></project-info>
    </ul>
    <div class='spacer'></div>
    <ul class="item">
      <project-info class="list-item"
        v-for="project in projects.slice(3)"
        :key="project.id"
        :project="project"
        @project-selected="projectSelected"
      ></project-info>
    </ul>
  </section>
  <section id="tasks-area">
    <new-task
      :projects="projects.slice(3)"
      @add-task="addTask"
    ></new-task>
    <ul class="tasks-list">
      <task-info
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :projects="projects.slice(3)"
        :projectFilter="projFilter"
        @complete-task="completeTask"
        @select-task-project="selectTaskProject"
        @edit-gems="editGems"
        @remove-task="removeTask"
        @edit-comment="editComment"
      ></task-info>
    </ul>
  </section>
</template>

<script>
import { taskFactory, projectFactory } from './lib/factories.js';

export default {
  data() {
    return {
      projFilter: {},
      completedTasksToday: 0,
      stats: {
        uncompletedTasks: 0,
        completedTasks: 0,
        gems: 0,
      },
      projects: [
        projectFactory('All', '176-windows.png', '176-windows.png'),
        projectFactory('Tomorrow', 'sun.png', 'sun.png'),
        projectFactory('Upcoming', '224-clock.png', '224-clock.png'),
        projectFactory('School'),
        projectFactory('Work'),
        projectFactory('Chores'),
      ],
      tasks: [],
    };
  },
  methods: {
    projectSelected(proj) {
      console.log('In projectSelected.');
      this.projects.map(project => {
        if (project.id === proj.id) {
          project.isSelected = true;
        } else {
          project.isSelected = false;
        }
      });
      this.projFilter = proj;
    },
    addTask(task) {
      const foundProject = this.projects.find(project => project.name === task.projectName);
      this.tasks.push(taskFactory(
        task.name,
        undefined,
        task.comment,
        foundProject,
        task.gems
      ));
      this.stats.uncompletedTasks+=1;
    },
    addProject(projectName) {
      if (this.projects.some(proj => proj.name === projectName.toLowerCase())) {
        alert('Project already exists.');
      } else {
        this.projects.push(projectFactory(projectName));
      }
    },
    completeTask(taskId) {
      const theTask = this.findTask(taskId);
      theTask.isCompleted = true;
      this.stats.completedTasks +=1;
      this.completedTasksToday++;
      this.stats.uncompletedTasks-=1;
      this.stats.gems+= Number(theTask.gems);
    },
    selectTaskProject(taskId, project) {
      const theTask = this.findTask(taskId);
      theTask.project = project;
    },
    editGems(taskId, gems) {
      const theTask = this.findTask(taskId);
      theTask.gems = gems;
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    findTask(taskId) {
      return this.tasks.find(task => task.id === taskId);
    },
    findProj(projId) {
      return this.projects.find(proj => proj.id === projId);
    },
    editComment(taskId, comment) {
      const theTask = this.findTask(taskId);
      theTask.comment = comment;
    },
    ApplyGemPenalty(penalty){
            this.stats.gems-= Number(penalty);
            if(this.stats.gems < 0) this.stats.gems = 0;
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {

      },
    },
    completedTasksToday(value) {
      console.log('In App, completedTasksToday() watcher...');
      console.log(value);
    },
  },
  mounted() {
    setInterval(() => {
      console.log("It's a new day! Resetting number of completed tasks today:");
      console.log(`Old: ${this.completedTasksToday}`);
      this.completedTasksToday = 0;
      console.log(`New: ${this.completedTasksToday}`);
    }, 86400000);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto&family=Fira+Code:wght@400;700&display=swap');
/* How to use the font above:
  font-family: 'Jost', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Fira Code', monospace;
*/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}

html {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Jost', sans-serif;
}

h1 { font-size: 1.6rem; }
h2 { font-size: 1.4rem; }

#app {
  min-width: 1000px;
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: 3rem auto;
  grid-template-areas:
      'head head'
      'leftPanel tasks';
}


/*
Header Styles
=============
*/
#title-wrapper {
  display: flex;
  margin-right: auto;
}

#header-info {
  display: flex;
  align-items: center;
  background-color: #00a8f3;
  grid-area: head;
  padding-left: 10px;
}

.header-item {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  color: #f0f0f0;
  font-weight: bold;
}

.header-item > img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

#title-wrapper > img {
  width: 100px;
  height: 47px;
}

#date-display {
  background-color: salmon;
  font-family: 'Jost', sans-serif;
}

#streak-counter,
#game-tracker,
#stat-counters {
  font-family: 'Fira Code', monospace;
}

#streak-counter {
  background-color: #cf393f;
}

#streak-counter > img {
}

/*
Left panel
==========
*/
#left-panel {
  background-color: #0080b9;
  grid-area: leftPanel;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#left-panel > ul {
  width: 100%;
}

#left-panel .list-item {
  list-style: none;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  color: #f0f0f0;
  font-family: 'Jost', sans-serif;
  font-size: 1.3rem;
  user-select: none;
  display: flex;
  align-items: center;
}

#left-panel .list-item:hover {
  background-color: #009ee4;
}

#left-panel .spacer {
  border: 1px solid #005a82;
  width: 95%;
  margin: 10px auto;
  height: 2px;
  border-radius: 1px;
}

#tasks-area {
  background-color: #f0f0f0;
  grid-area: tasks;
  padding: 2rem 5rem;
}

.list-item img {
  width: 22px;
  height: 22px;
  margin-right: 10px;
}

.img-btn {
  width: 32px;
  cursor: pointer;
}

.tasks-list {
  list-style: none;
  padding: 0 30px;
}

.tasks-list li {
  border-bottom: 2px solid #c3c3c3;
  margin-bottom: 1rem;
}

.projects-list {
  width: 100%;
}


/*
Dropdown styling
================
*/
.dropdown-container {
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  z-index: 1;
}

.dropdown-content li {
  list-style: none;
  border: none;
  color: #f0f0f0;
  width: 100%;
  text-align: center;
  margin: 2px;
  user-select: none;
}

.dropdown-content li:hover {
  background-color: grey;
}

.dropdown-content textarea {
  resize: none;
  width: 80%;
}

.dropdown-content button {
  width: 30%;
}

</style>
