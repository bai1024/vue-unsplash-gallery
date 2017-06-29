import Vue from 'vue'
import App from './App'
import VueWaypoint from 'vue-waypoint'
import './global'

Vue.config.productionTip = false

Vue.use(VueWaypoint)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})


