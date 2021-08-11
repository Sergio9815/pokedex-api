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
      <button @click="back()" type="button">PREVIOUS</button>
      <button @click="avanced()" type="button">NEXT</button>
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
      next: ' ',
      previous: ' ',
      results: [],
      characters: [],
    }
  },

  created() {
    this.isLoading = true
    this.getData()
  },

  updated() {
    this.ruta = this.$route
    this.$emit('homeActived', this.ruta.name)
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },

    getData(url) {
      api
        .getPokemons(url)
        .then((data) => {
          this.next = data[0]
          this.previous = data[1]
          this.results = data[2]
        })
        .finally(() => {
          for (let i = 0; i < this.results.length; i++) {
            api
              .getCharacters(this.results[i].name)
              .then((response) => {
                this.characters[i] = response
                this.characters[i].push(
                  utils.getTypeColor(this.characters[i][2])
                )
              })
              .finally(() => {
                i === 8 ? (this.isLoading = false) : (this.isLoading = true)
              })
          }
        })
    },

    avanced() {
      this.isLoading = true
      try {
        this.getData(this.next)
      } catch (error) {
        this.getData()
      }
      this.isLoading = false
    },

    back() {
      this.isLoading = true
      this.getData(this.previous)
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
@import '../styles/pokemon.css';
</style>
