<template>
    <li>
      <img class="li-item check-img" src="../assets/059-success.png" />
      <div class="li-item task-name">{{ task.name }}</div>
      <div class="li-item task-project">{{ task.project.name }}</div>
      <div class="li-item">
        <img class="gems-img" src="../assets/197-diamond.png" />
        <span class="task-gems">{{ task.gems }}</span>
      </div>
      <img class="li-item options-img" src="../assets/316-more.png" />
    </li>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style scoped>
img {
  width: 32px;
}

li {
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
  margin-left: 20px;
  margin-right: auto;
}

.task-project {
  background-color: black;
  color: #f0f0f0;
  padding: 10px;
  border-radius: 20px;
}
</style>
