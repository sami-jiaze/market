/* eslint-disable prefer-const */
import { reqOrderInfo } from '@/api/index.js'
const state = {
  orderInfo: []
}
const mutations = {
  GETORDERINFO (state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  // 获取商品清单
  async getOrderInfo ({ commit }) {
    let res = await reqOrderInfo()
    if (res.code === 200) {
      commit('GETORDERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async SubmitOrder ({ commit }) {

  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
