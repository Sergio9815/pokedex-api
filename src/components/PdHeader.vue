<template>
  <nav class="container">
    <div class="container__menu">
      <a @click="showMenu" href=""><i class="fas fa-bars"></i></a>
      <pd-slide />
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
import PdSlide from '@/components/PdSlide'

export default {
  name: 'PdHeader',
  components: { PdSlide },
  data() {
    return {
      title: 'Poke',
      subtitle: 'Dex',
    }
  },
  methods: {
    showMenu() {
      alert('Función en desarrollo... 🚀')
    },
  },
}
</script>

<style scoped>
@import '../styles/PdHeader.css';
</style>
