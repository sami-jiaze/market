import { reqGetSearchInfo } from '@/api/index.js'
// search
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST (state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList ({ commit }, params = {}) {
    // eslint-disable-next-line prefer-const
    let res = await reqGetSearchInfo(params)
    console.log(res)
    // eslint-disable-next-line eqeqeq
    if (res.code == 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
// 计算属性 主要作用是简化仓库数据
const getters = {
  goodsList (state) {
    // 没有网络时返回空对象undefined
    return state.searchList.goodsList || []
  },
  trademarkList (state) {
    return state.searchList.trademarkList
  },
  attrsList (state) {
    return state.searchList.attrsList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
