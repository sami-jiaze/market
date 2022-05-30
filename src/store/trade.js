/* eslint-disable prefer-const */
import { reqAddressInfo, reqOrderInfo } from '@/api/index.js'
const state = {
  address: [],
  orderInfo: []
}
const mutations = {
  GETUSERADDRESS (state, address) {
    state.address = address
  },
  GETORDERINFO (state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  // 获取用户地址信息
  async getUserAddress ({ commit }) {
    let res = await reqAddressInfo()
    if (res.code === 200) {
      commit('GETUSERADDRESS', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
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
