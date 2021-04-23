import Vue from 'vue'
import App from './App.vue'
import VueTippy, { TippyComponent } from 'vue-tippy'
import '@/styles/tippyTheme.css'

import router from '@/router'

Vue.config.productionTip = false

Vue.use(VueTippy)
Vue.component('tippy', TippyComponent)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
