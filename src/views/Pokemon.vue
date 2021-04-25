<template>
  <p>Pokemon</p>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pokémon | ',
      pokemon: '',
    }
  },
  created() {
    this.pokemon = this.$route.params.id
    document.title = this.title + this.pokemon
  },
}
</script>
