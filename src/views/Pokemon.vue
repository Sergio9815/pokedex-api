<template>
  <section class="main">
    <div class="main__content">
      <bar-loader
        class="loadingBar"
        :loading="isLoading"
        :color="'#ffffff'"
        :size="100"
        :width="150"
      />
      <pd-poke-data v-if="!isLoading" :pokemon="pokemon" />
    </div>
  </section>
</template>

<script>
import PdPokeData from '@/components/PdPokeData'
import api from '@/api'

export default {
  name: 'Pokemon',
  components: { PdPokeData },

  data() {
    return {
      isLoading: false,
      pokemon: [],
      title: 'Pokémon | ',
      types: [
        { name: 'normal', icon: ' 🍥' },
        { name: 'fire', icon: ' 🔥' },
        { name: 'water', icon: ' 🌊' },
        { name: 'grass', icon: ' 🍃' },
        { name: 'electric', icon: ' ⚡' },
        { name: 'ice', icon: ' ❄️' },
        { name: 'poison', icon: ' 🧪' },
        { name: 'fighting', icon: ' 🥊' },
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
      type: '',
      pokemonName: '',
    }
  },

  created() {
    this.isLoading = true
    this.pokemonName = this.$route.params.id

    api
      .getAssets(this.pokemonName)
      .then((character) => {
        try {
          this.pokemon = character
          this.getType(character[4][0].type.name)
          document.title = this.title + this.pokemon[0] + this.type
        } catch (error) {
          console.log(error)
        }
      })
      .finally(() => (this.isLoading = false))
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

<style scoped>
@import '../styles/main.css';
</style>
