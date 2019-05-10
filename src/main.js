import Vue from 'vue'
import App from './App.vue'

import {router} from './router/index.js'

import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// import * as VueGoogleMaps from 'vue2-google-maps'
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: process.env.VUE_APP_APIKEY,
//   }
// });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
