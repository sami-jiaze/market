/* eslint-disable prefer-const */
import { reqCartList, reqDeleteCartById, reqUpdateChecked } from '@/api/index.js'
const state = {
  cartList: []
}
const mutations = {
  GETCARTLIST (state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车列表
  async getCartList ({ commit }) {
    let res = await reqCartList()
    console.log(res)
    if (res.code === 200) {
      commit('GETCARTLIST', res.data)
    } else if (res.code === '007') {
      alert('请先登录')
      this.$router.push('/login')
    }
  },
  // 删除购物车某个产品
  async deleteCartById ({ commit }, skuId) {
    let res = await reqDeleteCartById(skuId)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 修改购物车产品选中状态
  async updateChecked ({ commit }, { skuId, isChecked }) {
    let res = await reqUpdateChecked(skuId, isChecked)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // context小仓库 commit提交mutation修改state,
  // 修改全选
  updateAllCartChecked ({ dispatch, state }, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updateChecked', {
        skuId: item.skuId,
        isChecked
      })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartList (state) {
    return state.cartList[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
