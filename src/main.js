import Vue from 'vue'
import App from './App.vue'
import VueTippy, { TippyComponent } from 'vue-tippy'
import '@/styles/tippyTheme.css'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { heightFilter, weightFilter, translate } from '@/filters'

Vue.config.productionTip = false

Vue.filter('height', heightFilter)
Vue.filter('weight', weightFilter)
Vue.filter('tr', translate)
Vue.use(VueSpinners)
Vue.use(VueTippy)
Vue.component('tippy', TippyComponent)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
