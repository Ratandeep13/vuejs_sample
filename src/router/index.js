import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/pages/Homepage'
import Newhomepage from '@/pages/Newhomepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Newhomepage',
      name: 'Newhomepage',
      component: Newhomepage
    }
  ]
})
