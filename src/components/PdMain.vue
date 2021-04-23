<template>
  <article class="container">
    <div class="container__search">
      <h3>{{ title }}</h3>
      <p>
        Encuentra a tus poekemons favoritos! Es tan fácil como escribir el
        nombre o el número del pokemon que deseas identificar y listo. :)
      </p>
      <div class="container__search-bar">
        <input
          v-model="value"
          class="bar--input"
          v-on:keyup.enter="search"
          type="text"
          placeholder="Enter the name or id of the Pokemon..."
        />
        <button @click="search" class="bar--button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <pd-icon
      style="margin-left: 100px"
      v-if="!url"
      :content="pokemonName"
      v-tippy="{ arrow: true, theme: 'honeybee' }"
    />
    <figure :content="pokemonName" v-tippy="{ arrow: true, theme: 'honeybee' }">
      <img :src="url" alt="" />
    </figure>
  </article>
</template>

<script>
import PdIcon from '@/components/PdIcon3'
import api from '@/api'

export default {
  name: 'PdMain',
  components: { PdIcon },
  data() {
    return {
      title: 'SEARCH POKEMONS',
      value: '',
      url: '',
      pokemonName: '',
    }
  },
  created() {
    this.getPokemon()
  },

  methods: {
    search() {
      alert(this.value)
    },

    getPokemon() {
      api.getImage().then((character) => {
        try {
          this.url = character.sprites.other.dream_world.front_default
          this.url
            ? (this.pokemonName = character.name)
            : (this.pokemonName = 'Charizard')
        } catch (error) {
          console.log(error)
        }
      })
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

img {
  width: 300px;
}

h3 {
  text-shadow: -3px 3px #d9113a;
  font-family: 'Cantora One', sans-serif;
  font-size: 30px;
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
  background-color: #283346;
  -webkit-box-shadow: inset 3px 3px 1px #141c2a;
  -moz-box-shadow: inset 3px 3px 1px #141c2a;
  box-shadow: inset 3px 3px 1px #141c2a;
}

.bar--input {
  width: 90%;
  height: 40px;
  margin-left: 15px;
  border-radius: 30px;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
  caret-color: #d9113a;
  background-color: unset;
}

::placeholder {
  color: rgba(255, 255, 255, 0.596);
  font-size: 1em;
}

.bar--button {
  width: 50px;
  height: 40px;
  border-radius: 6px;
  margin-left: -30px;
  color: white;
  background-color: unset;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 15px;
}

.bar--button:hover {
  color: #d9113a;
}
</style>
