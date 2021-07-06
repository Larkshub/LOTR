import { createStore } from 'vuex';
import actions from './actions';
import state from './state';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
});
