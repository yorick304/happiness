import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Regional from '@/components/Regional'
import Jiashan from '@/components/Jiashan'
import Nanxun from '@/components/Nanxun'
import Deqing from '@/components/Deqing'
import Nanhu from '@/components/Nanhu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Regional',
      name: 'Regional',
      component: Regional
    },
    {
      path: '/Regional/Jiashan',
      name: 'Jiashan',
      component: Jiashan
    },
    {
      path: '/Regional/Nanxun',
      name: 'Nanxun',
      component: Nanxun
    },
    {
      path: '/Regional/Deqing',
      name: 'Deqing',
      component: Deqing
    },
    {
      path: '/Regional/Nanhu',
      name: 'Nanhu',
      component: Nanhu
    }
  ]
})
