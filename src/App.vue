<template>
  <header id="header-info">
    <div class="app-title">
      <!-- Logo Goes Here -->
      <h1>Vanguard Pro</h1>
    </div>
    <div>
      <game-tracker></game-tracker>
    </div>
    <div>
      <!--Code for the counters-->
      <stat-counters
        :stat="stats"
      ></stat-counters>
    </div>
    <div>
      <streak-counter
      :completedTasks="stats.completedTasks"
      ></streak-counter>
    </div>
    <div>
      <date-display></date-display>
    </div>
  </header>
  <section id="left-panel">
    <h2>Projects List</h2>
    <div class="projects-list">
      <new-project
        @add-project="addProject"
      ></new-project>
      <ul>
        <project-info
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @projectFilter="projectFilter"
        ></project-info>
      </ul>
    </div>
  </section>
  <section id="tasks-area">
    <new-task
      :projects="projects"
      @add-task="addTask"
    ></new-task>
    <ul class="tasks-list">
      <task-info
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :projects="projects"
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
      stats: {
        uncompletedTasks: 0,
        completedTasks: 0,
        gems: 0,
      },
      projects: [
        projectFactory('School'),
        projectFactory('Work'),
        projectFactory('Chores'),
      ],
      tasks: [],
    };
  },
  methods: {
    projectFilter(proj){
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
    editComment(taskId, comment) {
      const theTask = this.findTask(taskId);
      theTask.comment = comment;
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
      },
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto&display=swap');
/* How to use the font above:
  font-family: 'Jost', sans-serif;
  font-family: 'Roboto', sans-serif;
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

h1, h2 {
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

#header-info {
  display: flex;
  align-items: center;
  background-color: #00a8f3;
  grid-area: head;
  padding-left: 10px;
}

.app-title {
  margin-right: auto;
}

#left-panel {
  background-color: #0080b9;
  grid-area: leftPanel;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

#tasks-area {
  background-color: #f0f0f0;
  grid-area: tasks;
  padding: 2rem 5rem;
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
