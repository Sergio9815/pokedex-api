<template>
  <section class="main">
    <div class="main__content">
      <!-- <bar-loader class="loadingBar" :loading="isLoading" :color="'#ffffff'" :size="100" :width="150" /> -->
      <!-- v-if="!isLoading"  -->
      <pd-main :pokemon="pokemon" />
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
      // isLoading: false,
      pokemon: { name: '', url: '' },
    }
  },
  created() {
    // this.isLoading = true
    document.title = 'PokeDex'
    api.getImage().then((character) => {
      try {
        this.pokemon.name = character[0]
        this.pokemon.url = character[1]
        this.pokemon.url ? this.pokemon.name : (this.pokemon.name = 'charizard')
      } catch (error) {
        console.log(error)
      }
    })
    // .finally(() => (this.isLoading = false))
  },
  methods: {},
}
</script>

<style scoped>
/* --- --- -- CONTAINER MAIN -- --- --- */

.main {
  width: 90%;
  height: 30rem;
  margin: auto;
  display: flex;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--main);
}

.main__content {
  width: 80%;
  /* background-color: lightgoldenrodyellow; */
}

/* .loadingBar {
  margin: auto;
} */

@media only screen and (max-width: 870px) {
  .main {
    height: 35rem;
  }

  .main__content {
    width: 90%;
  }
}

@media only screen and (max-width: 570px) {
  .main__content {
    width: 100%;
  }
}
</style>
