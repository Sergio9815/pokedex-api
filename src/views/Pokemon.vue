<template>
  <p class="normal">Pokémon</p>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pokémon | ',
      types: [
        { name: 'normal', icon: ' 🍥' },
        { name: 'fire', icon: ' 🔥' },
        { name: 'water', icon: ' 🌊' },
        { name: 'plant', icon: ' 🌿' },
        { name: 'electric', icon: ' ⚡' },
        { name: 'ice', icon: ' ❄️' },
        { name: 'fight', icon: ' 🥊' },
        { name: 'ground', icon: ' 🟤' },
        { name: 'flying', icon: ' 🦅' },
        { name: 'psychic', icon: ' 🔮' },
        { name: 'bug', icon: ' 🐛' },
        { name: 'ghost', icon: ' 👻' },
        { name: 'dragon', icon: ' 🐲' },
        { name: 'dark', icon: ' 💀' },
        { name: 'fairy', icon: ' 🎆' },
        { name: 'steel', icon: ' 🔩' },
        { name: 'rock', icon: ' 🔘' },
      ],
      pokemon: '',
      type: '',
    }
  },
  created() {
    this.getType('ghost')
    this.pokemon = this.$route.params.id
    document.title = this.title + this.pokemon + this.type
  },

  methods: {
    getType(name) {
      this.types.forEach((type) => {
        return type.name === name ? (this.type = type.icon) : ' '
      })
    },
  },
}
</script>

<style scoped></style>
