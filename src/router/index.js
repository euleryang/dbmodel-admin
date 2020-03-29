import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVuejs from '@/components/HelloVuejs'
import GojsTable from '@/components/TablePreview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GojsTable',
      component: GojsTable
    },
    {
      path: '/hellovue',
      name: 'HelloVuejs',
      component: HelloVuejs
    },
    {
      path: '/go',
      name: 'GojsTable',
      component: GojsTable
    }
  ]
})
