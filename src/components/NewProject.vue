<template>
  <form @submit.prevent="$emit('add-project', projectName)">
    <label class="formItem">Add project</label>
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
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0ed145;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  width: 85%;
  margin: auto;
  text-align: center;
}

form > .formItem {
  margin-top: 5px;
}

form label {
  color: #f0f0f0;
}

form input {
  border-radius: 5px;
  border-style: none;
  padding: 5px;
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
