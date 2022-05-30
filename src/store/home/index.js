/* eslint-disable space-before-function-paren */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { reqCategoryList} from '@/api'
import { reqGetbannnerlist } from '@/api/mockIndex.js'
import { reqFloorList } from '@/api/mockFloor.js'
// home
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
    // console.log(categoryList)
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async categoryList ({commit}) {
    let res = await reqCategoryList()
    console.log(res)
    if (res.code == 200) {
      commit("CATEGORYLIST", res.data)
    }
  },
  async getbannnerlist ({commit}) {
    let res = await reqGetbannnerlist()
    console.log(res)
    if (res.code === 200) {
      // 提交
      commit("GETBANNERLIST", res.data)
    }
  },
  async getFloorList({ commit }) {
    let res = await reqFloorList()
    if (res.code === 200) {
      commit("GETLOORLIST", res.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
