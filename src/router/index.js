import Vue from 'vue'
import Router from 'vue-router'
import PhotoList from '@/components/photo-list'
import PhotoGrid from '@/components/photo-grid'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/photo-list',
      component: PhotoList
    },
    {
      path:'/photo-grid',
      component: PhotoGrid
    }
  ]
})
