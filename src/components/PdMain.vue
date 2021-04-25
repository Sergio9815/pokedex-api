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
    <div v-if="!pokemon.url" @click="search(pokemon.name)">
      <pd-default-icon
        class="logoChar"
        :content="pokemon.name"
        v-tippy="{ arrow: true, theme: 'honeybee' }"
      />
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
import PdDefaultIcon from '@/components/PdDefaultIcon'

export default {
  name: 'PdMain',
  components: { PdDefaultIcon },
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
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

h3 {
  text-shadow: -3px 3px var(--red);
  font-family: 'Cantora One', sans-serif;
  font-size: 30px;
}

p {
  width: 80%;
  line-height: 30px;
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

.container__search-bar {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: 50px;
  background-color: var(--background);
}

.bar--input {
  width: 90%;
  height: 40px;
  margin-left: 15px;
  border-radius: 30px;
  color: var(--white);
  border: none;
  outline: none;
  font-size: 15px;
  caret-color: var(--yellow);
  background-color: unset;
}

::placeholder {
  color: rgba(255, 255, 255, 0.438);
  font-size: 0.9rem;
}

.bar--button {
  width: 50px;
  height: 45px;
  border-radius: 0 50px 50px 0;
  margin-left: -30px;
  color: var(--white);
  background-color: unset;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 15px;
}

.bar--button:hover {
  color: var(--yellow);
}

img {
  width: 300px;
  cursor: pointer;
}

.logoChar {
  outline: none;
  cursor: pointer;
}
</style>
