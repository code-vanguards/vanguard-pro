import { createApp } from 'vue';

import App from './App.vue';
import DateDisplay from './components/DateDisplay.vue';
import NewTask from './components/NewTask.vue';
import NewProject from './components/NewProject.vue';
import ProjectInfo from './components/ProjectInfo.vue';
import StatCounters from './components/StatCounters.vue';
import TaskInfo from './components/TaskInfo.vue';
import GameTracker from './components/GameTracker.vue';
import StreakCounter from './components/StreakCounter.vue';

const app = createApp(App);

app.component('date-display', DateDisplay);
app.component('new-task', NewTask);
app.component('project-info', ProjectInfo);
app.component('stat-counters', StatCounters);
app.component('task-info', TaskInfo);
app.component('game-tracker', GameTracker);
app.component('new-project', NewProject);
app.component('streak-counter', StreakCounter);

app.mount('#app');
