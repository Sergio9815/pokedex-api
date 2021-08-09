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
      <pd-characters v-if="!isLoading" :characters="characters" />
    </div>
  </section>
</template>

<script>
import PdCharacters from '@/components/PdCharacters'
import PdBackButton from '@/components/PdBackButton'
import api from '@/api'
import utils from '@/utils'

export default {
  name: 'AllPokemons',
  components: { PdCharacters, PdBackButton },

  data() {
    return {
      isLoading: false,
      allData: [],
      characters: [],
    }
  },

  created() {
    this.isLoading = true

    api
      .getPokemons()
      .then((data) => {
        this.allData = data
      })
      .finally(() => {
        for (let i = 0; i < this.allData[0].results.length; i++) {
          api
            .getCharacters(this.allData[0].results[i].name)
            .then((character) => {
              this.characters[i] = character
              this.characters[i].push(
                utils.getTypeColor(this.characters[i][2][0].type.name)
              )
            })
        }
      })
      .finally(() => (this.isLoading = false))
  },

  updated() {
    this.ruta = this.$route
    this.$emit('homeActived', this.ruta.name)
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
