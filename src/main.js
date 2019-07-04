import Vue from 'vue';
import App from './app.vue';
import router from './router/index'

new Vue({
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
