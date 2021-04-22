import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
})
