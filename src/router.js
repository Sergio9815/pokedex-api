import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Pokemon from '@/views/Pokemon'
import AllPokemons from '@/views/AllPokemons'
import Error from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //Definir las rutas
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: Pokemon,
    },
    {
      path: '/allpokemons',
      name: 'allpokemons',
      component: AllPokemons,
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
})
