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

import axios from 'axios'
// Axios.defaults.baseURL= '/api'
// axios.defaults.baseURL='http://116.62.203.227:9001/qndata/qnbasedata/'
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    axios.defaults.baseURL = 'http://116.62.203.227:9001/qndata/qnbasedata/';
  } else {
    //test 测试环境
    axios.defaults.baseURL = '/api';

  }
} else {
  //dev 开发环境
  axios.defaults.baseURL = '/api';
}

Vue.prototype.axios=axios
//导入样式
Vue.config.productionTip = false
Vue.use(iView)

Vue.config.productionTip = false;

new Vue({
  data: {
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
