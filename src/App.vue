<template>
  <header id="header-info">
    <div class="app-title">
      <!-- Logo Goes Here -->
      <h1>Vanguard Pro</h1>
    </div>
    <div>
      StatCounters
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
        <li v-for="project in projects" v-bind:key="project.id">{{ project.name }}</li>
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
        @complete-task="completeTask"
      ></task-info>
    </ul>
    <!-- GameTracker -->
  </section>
</template>

<script>
import { taskFactory, projectFactory } from './lib/factories.js';

export default {
  data() {
    return {
      stats: {
        uncompletedTasks: 0,
        completedTasks: 0,
        gems: 0,
      },
      projects: [
        projectFactory('School'),
        projectFactory('Work'),
      ],
      tasks: [
        taskFactory(
          'Buy Groceries',
          new Date().toISOString(),
          'Go to Canadian Superstore and buy bananas.',
          projectFactory('Chores'),
          5
        ),
        taskFactory(
          'Pay Bills',
          new Date().toISOString(),
          'Pay Electric and Credit Card',
          projectFactory('Chores'),
          5
        ),
      ],
    };
  },
  methods: {
    addTask(task) {
      const foundProject = this.projects.find(project => project.name === task.projectName);
      this.tasks.push(taskFactory(
        task.name,
        undefined,
        task.comment,
        foundProject,
        task.gems
      ));
    },
    addProject(projectName) {
      if (this.projects.some(proj => proj.name === projectName.toLowerCase())) {
        alert('Project already exists.');
      } else {
        this.projects.push(projectFactory(projectName));
      }
    },
    completeTask(taskId) {
      const theTask = this.tasks.find(task => task.id === taskId);
      theTask.isCompleted = true;
    },
  },
  watch: {
    tasks() {
      console.log('In tasks watcher...');
      /*
      this.projects = value.map(task => {
        if (!this.projects.some(project => task.project.id === project.id)) { // False, if project doesn't exist
          console.log(`Project ID not found ${task.project.id}.`);
          return projectFactory({
            name: task.project.name,
            id: task.project.id
          });
        }
      });
      */
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&family=Roboto&display=swap');
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
  padding: 2rem;
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
</style>
