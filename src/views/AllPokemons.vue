<template>
  <section class="main">
    <span id="start-page" ></span>
    <a href="#start-page" class="btn-flotante"><i class="fas fa-chevron-up"></i></a>
    <div class="header-decoration"></div>
    <pd-back-button v-if="!isLoading" v-on:goBack="goToHome" />
    <div class="main__data">
      <bar-loader
        class="loadingBar"
        :loading="isLoading"
        :color="'#19142a'"
        :size="100"
        :width="150"
      />
      <pd-characters v-if="!isLoading" :characters="characters" />
      <section  v-if="!isLoading" class="container-btn" >
        <button :class="previous ? ' ' : 'disable'" class="btn-pages" @click="back()" type="button">PREVIOUS</button>
        <div class="links-pages">
          <p>{{ pageTitle + pageNumber }}</p>
        </div>
        <button :class="results[8].name !== 'calyrex' ? ' ' : 'disable'" class="btn-pages" @click="avanced()" type="button">NEXT</button>
      </section>
    </div>
  </section>
</template>

<script>
import PdCharacters from '@/components/PdCharacters'
import PdBackButton from '@/components/PdBackButton'
import api from '@/api'
import utils from '@/utils'

export default {
  name: 'AllPokemons',
  components: { PdCharacters, PdBackButton },

  data() {
    return {
      isLoading: false,
      next: ' ',
      previous: ' ',
      results: [],
      characters: [],
      pageTitle: 'Page ',
      pageNumber: 1
    }
  },

  created() {
    this.getData()
    document.title = 'Pokémons ☆'
  },

  updated() {
    this.ruta = this.$route
    this.$emit('homeActived', this.ruta.name)
  },

  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    },

    getData(url) {
      this.isLoading = true
      api
        .getPokemons(url)
        .then((data) => {
          this.next = data[0]
          this.previous = data[1]
          this.results = data[2]
        })
        .finally(() => {
          for (let i = 0; i < this.results.length; i++) {
            api
              .getCharacters(this.results[i].name)
              .then((response) => {
                this.characters[i] = response
                this.characters[i].push(
                  utils.getTypeColor(this.characters[i][2])
                )
              })
              .finally(() => {
                  if (i === 14) {
                    this.isLoading = false
                  }                
              })
              
          }
        })
    },

    avanced() {
        this.getData(this.next)
        this.pageNumber += 1
    },

    back() {
      this.getData(this.previous)
      this.pageNumber -= 1
    },
  },
}
</script>

<style scoped>
@import '../styles/pokemon.css';

/* --- --- -- GO UP BUTTON -- --- --- */

#start-page {
  background-color: transparent;
  position: absolute;
  top: 0;
}

.btn-flotante {
	font-size: 16px;
	text-transform: uppercase; 
	font-weight: bold; 
	color: #ffffff; 
	border-radius: 5px; 
	letter-spacing: 2px; 
	background-color: var(--main); 
	padding: 12px 18px; 
	position: fixed;
	bottom: 30px;
	right: 40px;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 99;
}

.btn-flotante:hover {
	background-color: var(--background); 
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}

/* --- --- -- BUTTONS TO NAVIGATE BETWEEN PAGES -- --- --- */

.container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  gap: 20px;
  margin-top: -50px;
  background-color: var(--white);
  -webkit-box-shadow: 0px 8px 10px -6px #0000005b;
  box-shadow: 0px 8px 10px -6px #0000005b;
}

.btn-pages {
  font-size: 14px;
  background-color: var(--background);
  padding: 7px;
  letter-spacing: 3px;
  border-radius: 3px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  width: 150px;
  color: var(--white);
}

.btn-pages:hover {
  background-color: var(--blue);
  transition: .5s;
}

.disable {
  opacity: 0.2;
  pointer-events: none;
}

.links-pages {
  color: var(--background);
}

/* --- --- -- RESPONSIVE DESIGN -- --- --- */

@media only screen and (max-width: 400px) {
  .btn-pages {
    width: 100px;
  }
}

@media only screen and (max-width: 298px) {
  .btn-pages {
    width: 80px;
  }
}

@media only screen and (max-width: 600px) {
  .btn-flotante {
		font-size: 14px;
		padding: 7px 15px;
		bottom: 20px;
		right: 20px;
	}
}

</style>
