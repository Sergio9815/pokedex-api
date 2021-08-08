<template>
  <div class="container__buttons">
    <router-link class="container__link" :to="{ name: 'home' }">
      <a class="btn link" :class="ruta === 'home' ? 'active' : 'off'">HOME</a>
    </router-link>
    <a class="btn link" :class="ruta === 'pokemon' ? 'active' : 'off'"
      >POKEMONS</a
    >
    <a class="btn" href="https://github.com/Sergio9815/pokedex-api"
      ><i class="fab fa-github"></i>GITHUB</a
    >
  </div>
</template>

<script>
export default {
  props: {
    ruta: String,
  },
}
</script>

<style scoped>
@import '../styles/PdButtons.css';
</style>
