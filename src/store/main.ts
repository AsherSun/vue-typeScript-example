// import * as types from './mutation_types';
import { GetterTree, ActionTree, MutationTree} from 'vuex';
import * as ajaxs from '@/api/main.ts';
const state: IndexStore.State = {
  navMenu: {
    code: 0,
    message: '',
    data: [],
  },
}
const mutations: MutationTree<any> = {}
const actions: ActionTree<any, any> = {
  async initAjax({ dispatch }) {
    dispatch('getNavMenu')
  },
  async getNavMenu({ commit }) {
    const { data }: Ajax.AxiosResponse = await ajaxs.getNavMenuList()
    if (data.code) { state.navMenu = data }
  },
}
const getters: GetterTree<any, any> = {}
export default {
  state,
  mutations,
  actions,
  getters,
}

