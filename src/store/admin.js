/* eslint-disable prefer-const */
import { reqAdminList, reqAdminDelete, reqAdminPass } from '@/api'
const state = {
  checkList: []
}
const mutations = {
  GETADMINLIST (state, list) {
    state.checkList = list
  }
}
const actions = {
  // 管理员获取审核列表
  async adminGetList ({ commit }, skuId) {
    let res = await reqAdminList()
    // console.log(res)
    if (res.code === '200') {
      commit('GETADMINLIST', res.data)
      // console.log(res.data)
    }
  },
  // 管理员删除信息
  async adminDelete ({ commit }, skuId) {
    let res = await reqAdminDelete(skuId)
    console.log(res)
    if (res.code === '200') {
      location.reload()
      return 'ok'
    }
  },
  // 管理员通过信息
  async adminPass ({ commit }, skuId) {
    let res = await reqAdminPass(skuId)
    if (res.code === '200') {
      alert('已通过该商品')
      return 'ok'
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
