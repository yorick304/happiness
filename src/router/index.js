import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Regional from '@/components/Regional'
import Jiashan from '@/components/Jiashan'
import Nanxun from '@/components/Nanxun'
import Deqing from '@/components/Deqing'
import Nanhu from '@/components/Nanhu'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Regional/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Regional',
      name: 'Regional',
      component: Regional
    }
  ]
})
