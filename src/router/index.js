import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import serviceProduct from '@/components/serviceProduct'
import home from '@/components/home'
import cases from '@/components/cases'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/serviceProduct',
          name: 'serviceProduct',
          component: serviceProduct
        },
        {
          path: '/cases',
          name: 'cases',
          component: cases
        }
      ]
    }
  ]
})
