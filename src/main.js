import Vue from 'vue'
import App from './App.vue'

import {router} from './router/index.js'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAa4lYFQ6RxfebUMmALUHtS-1UvzIW3C0',
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
