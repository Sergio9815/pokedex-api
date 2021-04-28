<template>
  <article class="container">
    <div class="container__search">
      <h3>{{ title }}</h3>
      <p>
        ¡Encuentra a tus Pokémon favoritos! Es tan fácil como escribir el nombre
        o número correspondiente a la Pokédex Nacional y listo. 🌟
      </p>
      <div class="container__search-bar">
        <input
          v-model="value"
          class="bar--input"
          type="text"
          v-on:keyup.enter="search(value)"
          placeholder="Enter the name or id of the Pokemon (1 - 898)..."
        />
        <button @click="search(value)" class="bar--button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <figure
      v-if="pokemon.url"
      :content="pokemon.name"
      v-tippy="{ arrow: true, theme: 'honeybee' }"
    >
      <img :src="pokemon.url" alt="" @click="search(pokemon.name)" />
    </figure>
  </article>
</template>

<script>
export default {
  name: 'PdMain',
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      title: '¿QUIÉN ES ESE POKÉMON?',
      value: '',
    }
  },

  methods: {
    search(id = this.value) {
      this.$router.push({ name: 'pokemon', params: { id } })
    },
  },
}
</script>

<style scoped>
@import '../styles/PdMain.css';
</style>
