<template>
  <article class="container">
    <p class="normal">🚀 SITIO EN DESARROLLO...</p>
  </article>
</template>

<script>
export default {
  name: 'PdPokeData',

  props: {
    pokemon: {
      type: Array,
      default: () => [],
    },
    species: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      title: '¿QUIÉN ES ESE POKÉMON?',
      value: '',
    }
  },

  methods: {
    search(id = this.value) {
      this.$router.push({ name: 'pokemon', params: { id } })
    },
  },
}
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 35rem;
  width: 100%;
}
p {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: 'Josefin Sans';
}
</style>
