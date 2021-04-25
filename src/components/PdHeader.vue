<template>
  <nav class="container">
    <div class="container__menu">
      <a @click="showMenu" href=""><i class="fas fa-bars"></i></a>
    </div>
    <div class="container__title">
      <router-link class="container__link" :to="{ name: 'home' }">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h1>-API</h1>
      </router-link>
    </div>
  </nav>
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
  height: 80px;
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
  color: var(--white);
}

.fas {
  font-size: 20px;
}

.container__link {
  display: flex;
  align-items: center;
}

.container__title {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 3px;
  margin-left: 30px;
  /* background-color: lightgreen; */
  font-family: 'Cantora One', sans-serif;
}

h1 {
  font-size: 25px;
}

h2 {
  font-size: 25px;
  text-transform: uppercase;
  color: var(--red);
}

@media only screen and (max-width: 800px) {
  .container__link {
    width: 90%;
    justify-content: center;
    margin-right: 100px;
  }
}
</style>
