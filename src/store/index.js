import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    usernamemsg: '',
  },
  actions,
  mutations,
  getters: {
    usernamemsg(state){
      return state.usernamemsg
    }
  }

});

export default store;
