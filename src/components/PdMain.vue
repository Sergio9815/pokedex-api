<template>
  <article class="container">
    <pd-icon />
    <div class="container__search">
      <h3>{{ title }}</h3>
      <p>
        Encuentra a tus poekemons favoritos! Es tan fácil como escribir el
        nombre o el número del pokemon que deseas identificar y listo. :)
      </p>
    </div>
  </article>
</template>

<script>
import PdIcon from '@/components/PdIcon'

export default {
  name: 'PdMain',
  components: { PdIcon },
  data() {
    return {
      title: 'SEARCH POKEMONS',
    }
  },
  methods: {},
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.container__search {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: justify;
  font-family: 'Barlow Semi Condensed', sans-serif;
}
</style>
