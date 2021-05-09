<template>
  <div>
    <nav class="container">
      <section class="container__title">
        <router-link class="container__link" :to="{ name: 'home' }">
          <h1>{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
          <h1>-API</h1>
        </router-link>
      </section>

      <a
        v-show="!showSocial"
        @click="showMenu"
        class="btn-down animate__animated animate__rotateIn"
        ><i class="fas fa-chevron-down down"></i
      ></a>
      <a
        v-show="showSocial"
        @click="showMenu"
        class="btn-down animate__animated animate__rotateIn"
        ><i class="fas fa-chevron-up down"></i
      ></a>
      <section class="btnS">
        <pd-buttons />
      </section>
    </nav>
    <section
      v-show="showSocial"
      class="socialbar animate__animated animate__fadeInDown"
    >
      <pd-buttons />
    </section>
  </div>
</template>

<script>
import PdButtons from '@/components/PdButtons'
import 'animate.css'

export default {
  name: 'PdHeader',
  components: { PdButtons },
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
