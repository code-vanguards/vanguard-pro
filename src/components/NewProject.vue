<template>
  <form @submit.prevent="addProject">
    <label class="formItem">Add Project</label>
    <input class="formItem" type="text" v-model="projectName"/>
    <button class="formItem">Add</button>
  </form>
</template>

<script>
export default {
  emits: ['add-project'],
  data() {
    return {
      projectName: '',
    };
  },
  methods: {
    addProject() {
      if (this.projectName) {
        this.$emit('add-project', this.projectName);
        this.projectName = '';
      } else {
        alert('Please enter a name for the project.');
      }
    },
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 10px 10px;
  width: 85%;
  margin: 10px auto 0 auto;
  text-align: center;
}

form > .formItem {
  margin: 5px 0;
}

form label {
  font-family: 'Jost', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: #f0f0f0;
}

form input {
  border-radius: 5px;
  border-style: none;
  padding: 7px;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  color: #585858;
}

form button {
  border-radius: 3px;
  width: 4rem;
  padding: 3px;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 3px #000000;
  border-style: none;
  background-color: #ff7f27;
}

form button:hover {
  background-color: #ffa465;
}

form button:active {
  background-color: #ff7f27;
}
</style>
