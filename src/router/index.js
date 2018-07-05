import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/header/About'
import Home from '@/components/header/Home'
import Contact from '@/components/header/Contact'
import TimeLine from '@/components/header/TimeLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/timeLine',
      name: 'TimeLine',
      component: TimeLine
    }
  ]
})
