import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'

// require('./assets/css/bootstrap.min.css');
// require('./assets/css/framework.css');
// require('./assets/css/layout.css');
// require('./assets/fonts/proxima/stylesheet.css');
// require('./assets/css/aos.css');

Vue.config.productionTip = false

Vue.use(Notifications)

new Vue({
  render: h => h(App),
}).$mount('#app')
