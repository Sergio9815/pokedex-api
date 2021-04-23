<template>
  <div class="container">
    <div class="container__menu">
      <a @click="showMenu" href=""><i class="fas fa-bars"></i></a>
    </div>
    <div class="container__title">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <h1>API</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PdHeader',
  data() {
    return {
      title: 'Poke',
      subtitle: 'Dex',
    }
  },
  methods: {
    showMenu() {
      alert('Menu')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  justify-content: center;
  /* background-color: lightcoral; */
}

.container__menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  /* background-color: lightblue; */
}

a {
  text-decoration: none;
  color: white;
}

.fas {
  font-size: 20px;
}

.container__title {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 3px;
  margin-left: 30px;
  /* background-color: lightgreen; */
  font-family: 'VT323', monospace;
}

h1 {
  font-size: 35px;
}

h2 {
  font-size: 35px;
  color: #d9113a;
}
</style>
