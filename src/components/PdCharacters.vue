<template>
  <article class="content">
    <section class="content__pokemon">
      <div class="content__pokemon-title">
        <h1 class="title-poke">
          {{ title }}
        </h1>
      </div>
      <div class="content__pokemon-info">
        <div class="poke-container">
          <figure
            v-for="item in characters"
            v-bind:key="item[0]"
            class="poke-container__character"
          >
            <img
              class="character__image"
              :src="item[3]"
              alt=""
              @click="search(item[0])"
            />
            <figcaption class="character__desc">
              <div class="desc-title">
                <h6 id="title-name">{{ item[0] }}</h6>
                <h6 class="title-id">{{ '#' + item[1] }}</h6>
              </div>
              <p :class="item[4] ? item[4] : 'red'" class="desc-type">
                {{ item[2] | tr }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
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
      title: 'Pokémons',
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
@import '../styles/PdPokeData.css';

.poke-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--white);
}

.content__pokemon-info {
  width: 100%;
}

.poke-container__character {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

.character__image {
  width: 250px;
  background-color: #f2f2f2;
  cursor: pointer;
}

.character__image:hover {
  animation: heartBeat;
  animation-duration: 2s;
}

.character__desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  justify-content: space-around;
  width: 100%;
  font-family: 'Josefin Sans';
}

.desc-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  font-size: 24px;
  gap: 10px;
}

.title-id {
  color: var(--main);
}

.desc-type {
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
}

@media only screen and (max-width: 980px) {
  .character__image {
    width: 300px;
  }
}
</style>
