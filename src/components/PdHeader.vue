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
@import '../styles/PdHeader.css';
</style>
