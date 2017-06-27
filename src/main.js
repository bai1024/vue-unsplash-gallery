import Vue from 'vue'
import App from './App'
import VueWaypoint from 'vue-waypoint'

Vue.config.productionTip = false

Vue.use(VueWaypoint)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})


