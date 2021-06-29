<template>
  <section class="main">
    <div class="header-decoration"></div>
    <pd-back-button v-if="!isLoading" v-on:goBack="goToHome" />
    <div class="main__data">
      <bar-loader
        class="loadingBar"
        :loading="isLoading"
        :color="'#19142a'"
        :size="100"
        :width="150"
      />
      <pd-poke-data v-if="!isLoading" :pokemon="pokemon" :species="species" />
    </div>
  </section>
</template>

<script>
import PdPokeData from '@/components/PdPokeData'
import PdBackButton from '@/components/PdBackButton'
import api from '@/api'
import utils from '@/utils'

export default {
  name: 'Pokemon',
  components: { PdPokeData, PdBackButton },

  data() {
    return {
      isLoading: false,
      pokemon: [],
      species: [],
      title: 'Pokémon | ',
      type: '',
      pokemonName: '',
    }
  },

  created() {
    this.isLoading = true
    this.pokemonName = this.$route.params.id.toLowerCase()

    api
      .getAssets(this.pokemonName)
      .then((character) => {
        this.pokemon = character
        this.type = utils.getType(character[5][0].type.name)
        document.title = this.title + this.pokemon[0] + this.type
      })
      .finally(() => {
        api
          .getSpecies(this.pokemon[1])
          .then((character) => {
            this.species = character
          })
          .finally(() => (this.isLoading = false))
      })
  },

  updated() {
    this.pokemon.length === 0
      ? this.goToNotFound()
      : console.log('Petición exitosa!')

    this.ruta = this.$route
    this.$emit('homeActived', this.ruta.name)
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },

    goToNotFound() {
      this.$router.push({ name: 'error' })
    },
  },
}
</script>

<style scoped>
@import '../styles/pokemon.css';
</style>
