<template>
  <section class="main">
    <div class="header-decoration"></div>
    <div v-if="!isLoading" class="main__back">
      <a class="main__back-text" @click="goToHome" href="">
        <i class="fas fa-arrow-left"></i> Volver</a
      >
    </div>
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
import api from '@/api'
import utils from '@/utils'

export default {
  name: 'Pokemon',
  components: { PdPokeData },

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
    this.pokemonName = this.$route.params.id

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

  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style scoped>
@import '../styles/pokemon.css';
</style>
