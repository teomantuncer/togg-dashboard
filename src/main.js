import Vue from 'vue'
import { LMap, LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
