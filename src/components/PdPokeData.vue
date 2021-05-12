<template>
  <article class="content">
    <section class="content__pokemon">
      <div class="content__pokemon-title">
        <h1 class="title-poke">
          {{ pokemon[0] }}
        </h1>
        <h1 id="id" class="title-poke"># {{ pokemon[1] }}</h1>
      </div>
      <div class="content__pokemon-info">
        <div class="pokemon__data">
          <p id="desc" class="pokemon__data-description">
            {{ species[1].flavor_text }}
          </p>
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
              <select
                :class="colors ? colors : 'red'"
                class="grid__text-p select"
              >
                <option
                  :class="colors ? colors : 'red'"
                  v-for="item in pokemon[5]"
                  :key="item.type.name"
                >
                  {{ item.type.name | tr }}
                </option>
              </select>
            </div>
            <div>
              <h4 class="grid__text">Habilidades</h4>
              <select
                :class="colors ? colors : 'red'"
                class="grid__text-p select"
              >
                <option
                  :class="colors ? colors : 'red'"
                  v-for="item in pokemon[2]"
                  :key="item.ability.name"
                >
                  {{ item.ability.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <figure class="pokemon__picture animate__animated animate__bounceIn">
          <img class="pokemon__picture-img" :src="pokemon[6]" alt="" />
        </figure>
      </div>
    </section>
  </article>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core'
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

  mounted() {
    var app = document.getElementById('desc')
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75,
    })

    typewriter
      .pauseFor(500)
      .typeString(this.species[1].flavor_text)
      .pauseFor(300)
      .start()
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
