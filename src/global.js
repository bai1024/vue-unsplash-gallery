import Vue from "vue"
import VueWaypoint from "vue-waypoint"
import Loading from '@/components/_loading'

import "vue-awesome/icons/heart"
import "vue-awesome/icons/arrow-down"

Vue.use(VueWaypoint)

// global components
Vue.component("_loading", Loading)

export const bus = new Vue()
