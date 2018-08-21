import Vue from 'vue';
import Vuex from 'vuex';
import index from '@/store/index.ts'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    index,
  },
});
