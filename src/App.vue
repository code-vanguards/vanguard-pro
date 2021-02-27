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
      <ul>
        <li v-for="project in projects" v-bind:key="project.id">{{ project.name }}</li>
      </ul>
    </div>
  </section>
  <section id="tasks-area">
    <div class="new-task">
      <!-- NewTask-->
      Add Task
    </div>
    <ul class="tasks-list">
      <li v-for="task in tasks"
      :key="task.id">
        Name: {{ task.name }}
        Comment: {{task.comment}}
        Gems: {{ task.gemsWorth }}
        Due Date: {{ task.dueDate }}
        Project: {{ task.project.name }}
      </li>
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
          'Go to Canadian Superstore and buy bananas.',
          new Date().toISOString(),
          projectFactory('Chores'),
          10
        ),
        taskFactory(
          'Pay Bills',
          'Pay Electric and Credit Card',
          new Date().toISOString(),
          projectFactory('Chores'),
          5
        ),
      ],
    };
  },
  methods: {
  },
  computed: {
  },
  watch: {
    /*
    tasks(value) {
      console.log('In tasks watcher...');
      this.projects = value.map(task => {
        if (!this.projects.some(project => task.project.id === project.id)) { // False, if project doesn't exist
          console.log(`Project ID not found ${task.project.id}.`);
          return { projectFactory(task.project.name, task.project.id);
        }
      });
    },
    */
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

.new-task {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: auto;
  width: 50rem;
  height: 5rem;
  text-align: center;
  margin-bottom: 4rem;
}

.tasks-list {
  list-style: none;
}

.tasks-list li {
  border-bottom: 2px solid #c3c3c3;
  margin-bottom: 1rem;
}
</style>
