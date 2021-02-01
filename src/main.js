import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
import './api/api'
import './api/mock'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Axios from 'axios'
Axios.defaults.baseURL= '/api'
//导入样式
Vue.config.productionTip = false
Vue.use(iView)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
