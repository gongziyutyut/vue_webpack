import Vue from 'vue';
import App from './app.vue';
import './asset/js/jquery.min.js'
import router from './router/index';
import store from './store/index';
import create from '@/utils/create'
window.jQuery = $

Vue.use(create)




const vm = new Vue({
  store,
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')