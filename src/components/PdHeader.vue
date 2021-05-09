<template>
  <nav class="container">
    <div class="container__title">
      <router-link class="container__link" :to="{ name: 'home' }">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h1>-API</h1>
      </router-link>
    </div>

    <div class="container__buttons">
      <a class="btn" href="https://github.com/Sergio9815/pokedex-api"
        ><i class="fab fa-github"></i>GITHUB</a
      >
      <a class="btn" href="https://www.instagram.com/sagb_24/"
        ><i class="fab fa-instagram"></i>INSTAGRAM</a
      >
    </div>
  </nav>
</template>

<script>
// import PdSlide from '@/components/PdSlide'
import 'animate.css'

export default {
  name: 'PdHeader',
  // components: { PdSlide },
  data() {
    return {
      title: 'Poke',
      subtitle: 'Dex',
      showSocial: false,
    }
  },
  methods: {
    showMenu() {
      this.showSocial = !this.showSocial
    },
  },
}
</script>

<style scoped>
@import '../styles/PdHeader.css';
</style>
