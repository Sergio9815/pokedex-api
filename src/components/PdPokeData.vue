<template>
  <article class="content">
    <section class="content__pokemon">
      <!-- :class="colors ? colors : 'red' -->
      <h3 class="content__pokemon-title">
        {{ pokemon[0] }} # {{ pokemon[1] }}
      </h3>
      <div class="content__pokemon-info">
        <div class="pokemon__data">
          <p class="pokemon__data-description">{{ species[1].flavor_text }}</p>
          <div :class="colors ? colors : 'red'" class="pokemon__data-grid">
            <div>
              <h4 class="grid__text">Altura</h4>
              <p class="grid__text-p">{{ pokemon[3] | height }}</p>
            </div>
            <div>
              <h4 class="grid__text">Peso</h4>
              <p class="grid__text-p">{{ pokemon[4] | weight }}</p>
            </div>
            <div>
              <h4 class="grid__text">Tipo</h4>
              <p class="grid__text-p">{{ pokemon[5][0].type.name | tr }}</p>
            </div>
            <div>
              <h4 class="grid__text">Habilidad</h4>
              <p class="grid__text-p">{{ pokemon[2][0].ability.name }}</p>
            </div>
          </div>
        </div>
        <figure class="pokemon__picture animate__animated animate__slideInUp">
          <img class="pokemon__picture-img" :src="pokemon[6]" alt="" />
        </figure>
      </div>
    </section>
  </article>
</template>

<script>
import utils from '@/utils'
import 'animate.css'

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
