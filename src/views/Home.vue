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
      <pd-main v-if="!isLoading" :pokemon="pokemon" />
    </div>
  </section>
</template>

<script>
import PdMain from '@/components/PdMain'
import api from '@/api'

export default {
  name: 'Home',
  components: { PdMain },
  data() {
    return {
      isLoading: false,
      pokemon: { name: '', url: '' },
    }
  },
  created() {
    this.isLoading = true
    document.title = 'PokeDex'
    api
      .getImage()
      .then((character) => {
        try {
          this.pokemon.name = character[0]
          this.pokemon.url = character[1]
          this.pokemon.url
            ? this.pokemon.name
            : (this.pokemon.name = 'charizard')
        } catch (error) {
          console.log(error)
        }
      })
      .finally(() => (this.isLoading = false))
  },
  methods: {},
}
</script>

<style scoped>
@import '../styles/home.css';
</style>
