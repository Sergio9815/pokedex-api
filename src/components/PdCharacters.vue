<template>
  <article class="content">
    <section class="content__pokemon">
      <div class="content__pokemon-title">
        <h1 class="title-poke">
          {{ title }}
        </h1>
      </div>
      <div class="content__pokemon-info"></div>
    </section>
  </article>
</template>

<script>
import utils from '@/utils'
import 'animate.css'

export default {
  name: 'PdCharacters',

  props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      title: 'List Pokémons',
    }
  },

  computed: {
    colors() {
      return utils.getColor(this.species[0])
    },
  },
}
</script>

<style scoped>
@import '../styles/PdPokeData.css';
</style>
