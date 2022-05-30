/* eslint-disable prefer-const */
import { reqUserRegister, reqUserLogin, reqUserInfo, reqLogout, reqRegCode, reqUpload, reqPermission } from '@/api/index.js'
import { setToken, getToken, removeToken } from '@/utils/token.js'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  USERLOGIN (state, token) {
    state.token = token
  },
  ADMINLOGIN (state, token) {
    state.token = token
  },
  GETUSERINFO (state, userInfo) {
    state.userInfo = userInfo
  },
  // 清除本地数据
  CLEARUSER (state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
  }
}
const actions = {
  // 用户注册
  async userRegister ({ commit }, user) {
    let res = await reqUserRegister(user)
    if (res.code === '200') {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 登入
  async userLogin ({ commit }, data) {
    let res = await reqUserLogin(data)
    console.log(res)
    if (res.code === 200) {
      commit('USERLOGIN', res.data.token)
      setToken(res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 获取用户信息
  async GetUserInfo ({ commit }) {
    let res = await reqUserInfo()
    if (res.code === 200) {
      commit('GETUSERINFO', res.data)
    }
  },
  // 用户退出
  async userLogout ({ commit }) {
    let res = await reqLogout()
    if (res.code === 200) {
      commit('CLEARUSER')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 获取验证码
  async userCode ({ commit }) {
    let res = await reqRegCode()
    console.log(res)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 用户上传
  async userUpload ({ commit }, data) {
    let res = await reqUpload(data)
    console.log(res)
    if (res.code === '200') {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 权限获取
  async userPermission ({ commit }) {
    let res = await reqPermission()
    console.log(res)
    if (res.code === '200') {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
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
