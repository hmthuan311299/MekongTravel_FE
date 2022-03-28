import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
