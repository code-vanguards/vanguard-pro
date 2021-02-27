import { createApp } from 'vue';
import App from './App.vue';
import DateDisplay from './components/DateDisplay.vue';
import NewTask from './components/NewTask.vue';
import ProjectsList from './components/ProjectsList.vue';
import StatCounters from './components/StatCounters.vue';
import TaskInfo from './components/TaskInfo.vue';

const app = createApp(App);

app.component('date-display', DateDisplay);
app.component('new-task', NewTask);
app.component('projecst-list', ProjectsList);
app.component('stat-counters', StatCounters);
app.component('task-info', TaskInfo);

app.mount('#app');
