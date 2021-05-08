<template>
  <nav class="container">
    <div class="container__menu">
      <button class="container__menu-btn" @click="showMenu">
        <i class="fas fa-bars"></i>
      </button>
      <pd-slide
        class="animate__animated animate__fadeIn"
        v-show="showSocial"
        v-on:hide="showMenu"
        :showSocial="showSocial"
      />
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
import 'animate.css'

export default {
  name: 'PdHeader',
  components: { PdSlide },
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
