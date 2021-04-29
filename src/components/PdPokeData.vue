<template>
  <article class="content">
    <section class="content__pokemon">
      <!-- :class="colors ? colors : 'red' -->
      <h3 class="content__pokemon-title">
        {{ pokemon[0] }} º {{ pokemon[1] }}
      </h3>
      <div class="content__pokemon-info">
        <div class="pokemon__data">
          <p class="pokemon__data-description">{{ species[1].flavor_text }}</p>
          <p class="pokemon__data-charac">Altura: {{ pokemon[3] | height }}</p>
          <p class="pokemon__data-charac">Peso: {{ pokemon[4] | weight }}</p>
          <p class="pokemon__data-charac">
            Tipo: {{ pokemon[5][0].type.name | tr }}
          </p>
          <p class="pokemon__data-charac">Habilidades:</p>
          <ol>
            <li v-for="item in pokemon[2]" v-bind:key="item.day">
              {{ item.ability.name }}
            </li>
          </ol>
        </div>
        <figure class="pokemon__picture">
          <img class="pokemon__picture-img" :src="pokemon[6]" alt="" />
        </figure>
      </div>
    </section>

  </article>
</template>

<script>
import utils from '@/utils'

export default {
  name: 'PdPokeData',

  props: {
    pokemon: {
      type: Array,
      default: () => [],
    },
    species: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {}
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
