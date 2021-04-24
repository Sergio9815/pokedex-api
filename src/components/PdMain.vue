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
          placeholder="Enter the name or id of the Pokemon..."
        />
        <button @click="search(value)" class="bar--button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <div v-if="!url" @click="search(pokemonName)">
      <pd-icon
        class="logoChar"
        :content="pokemonName"
        v-tippy="{ arrow: true, theme: 'honeybee' }"
      />
    </div>
    <figure
      v-if="url"
      :content="pokemonName"
      v-tippy="{ arrow: true, theme: 'honeybee' }"
    >
      <img :src="url" alt="" @click="search(pokemonName)" />
    </figure>
  </article>
</template>

<script>
import PdIcon from '@/components/PdIcon'
import api from '@/api'

export default {
  name: 'PdMain',
  components: { PdIcon },
  data() {
    return {
      title: '¿QUIÉN ES ESE POKÉMON?',
      value: '',
      url: '',
      pokemonName: '',
    }
  },

  created() {
    this.getPokemon()
  },

  methods: {
    search(id) {
      this.$router.push({ name: 'pokemon', params: { id } })
    },

    getPokemon() {
      api.getImage().then((character) => {
        try {
          this.url = character[1]
          this.url
            ? (this.pokemonName = character[0])
            : (this.pokemonName = 'charizard')
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
  cursor: pointer;
}

h3 {
  text-shadow: -3px 3px #d9113a;
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
  caret-color: #ffe268;
  background-color: unset;
}

::placeholder {
  color: rgba(255, 255, 255, 0.438);
  font-size: .9rem;
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
  color: #ffe268;
}

.logoChar {
  outline: none;
  cursor: pointer;
}
</style>
