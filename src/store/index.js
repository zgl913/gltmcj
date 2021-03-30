import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:'',
    nicheng:'',
    xingbie:'',
    token:''
  },
  mutations: {
    getmessage(state,payload) {
      state.username = payload.username;
      state.nicheng = payload.nicheng;
      state.xingbie = payload.xingbie;
    }
  },
  actions: {
    agetmessage (context,payload) {
      context.commit('getmessage', payload)
    }
  },
  modules: {}
});

// //创建VueX对象
// const store = new Vuex.Store({
//   state:{
//     //存放的键值对就是所要管理的状态
//     name:'helloVueX'
//   }
// })
//
// export default store
