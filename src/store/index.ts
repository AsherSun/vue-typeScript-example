import * as types from '@/store/mutation_types';
import { GetterTree, ActionTree, MutationTree} from 'vuex';
import * as ajaxs from '@/api/index.ts';
const state: IndexStore.State = {
  navMenu: [],
}

const mutations: MutationTree<any> = {
  [types.GET_NAV_MENU](state, data) {
    state.navMenu = data
  },
}
const actions: ActionTree<any, any> = {
  async initAjax({ dispatch }) {
    dispatch('getNavMenu')
  },
  async getNavMenu({state, commit }) {
    const { data }: Ajax.AxiosResponse = await ajaxs.getNavMenuList()
    if (data.code) { commit(types.GET_NAV_MENU, data.data) }
  },
}
const getters: GetterTree<any, any> = {}

export default {
  state,
  mutations,
  actions,
  getters,
}

