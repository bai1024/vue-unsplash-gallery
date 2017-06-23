// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWaypoint from 'vue-waypoint'

Vue.config.productionTip = false

Vue.use(VueWaypoint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  method:{
   getRandomColor:function (){
      var letters = '789ABCDF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
      }
      console.log(color)
      return color;
    }
  }
})


