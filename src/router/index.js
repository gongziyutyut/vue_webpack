import Vue from 'vue';
import VueRouter from 'vue-router';
/* import About from '../view/about';
import Home from '../view/home'; */


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: resolve => require(['../view/home'], resolve)
    },
    {
      path: '/About',
      component: resolve => require(['../view/about'], resolve) 
    },
  ]
})