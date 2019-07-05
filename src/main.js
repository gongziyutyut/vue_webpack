import Vue from 'vue';
import App from './app.vue';
import router from './router/index';
import store from './store/index';

new Vue({
  store,
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
