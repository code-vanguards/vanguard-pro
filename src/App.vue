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
      DateDisplay
    </div>
  </header>
  <section id="left-panel">
    <h2>Projects List</h2>
    <!-- ProjectsList -->
  </section>
  <section id="tasks-area">
    <div class="new-task">
      Add Task
    </div>
    <!-- NewTask, TaskInfo, GameTracker -->
  </section>
</template>

<script>
export default {};
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
}
</style>
