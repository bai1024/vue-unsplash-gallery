import Vue from 'vue'
import App from './App'
import './global'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})


