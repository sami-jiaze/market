/* eslint-disable prefer-const */
import { reqUserRegister, reqUserLogin, reqUserInfo, reqRegCode, reqUpload, reqPermission, reqUploadImg, reqAdminPassList, reqUploadInfo } from '@/api/index.js'
import { setToken, getToken, removeToken } from '@/utils/token.js'
const state = {
  token: getToken(),
  userInfo: '',
  goodId: '',
  imgSrc: '',
  message: '',
  allList: []
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
  GETPERMISSION (state, message) {
    state.message = message
  },
  // 清除本地数据
  CLEARUSER (state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
  },
  UPLOAD (state, id) {
    state.goodId = id
  },
  UPLOADIMG (state, pic) {
    state.imgSrc = pic
  },
  GETALLLIST (state, list) {
    state.allList = list
  }
}
const actions = {
  // 用户注册
  async userRegister ({ commit }, user) {
    let res = await reqUserRegister(user)
    console.log(res)
    if (res.code === '200') {
      alert('注册成功')
      return 'ok'
    } else {
      console.log(res)
      return Promise.reject(new Error('faile'))
    }
  },
  // 登入
  async userLogin ({ commit }, data) {
    let res = await reqUserLogin(data)
    console.log(res)
    if (res.code === '200') {
      alert('登录成功')
      commit('USERLOGIN', res.message)
      setToken(res.message)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 获取用户信息
  async GetUserInfo ({ commit }) {
    let res = await reqUserInfo()
    console.log(res)
    if (res.code === 200) {
      commit('GETUSERINFO', res.data)
    }
  },
  // 用户退出
  async userLogout ({ commit }) {
    // let res = await reqLogout()
    // if (res.code === 200) {
    commit('CLEARUSER')
    location.reload()
    // return 'ok'
    // } else {
    //   return Promise.reject(new Error('faile'))
    // }
  },
  // 获取验证码
  async userCode ({ commit }, phone) {
    let res = await reqRegCode(phone)
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
      commit('UPLOAD', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 上传图片
  async userUploadImg ({ commit }, goodId) {
    let res = await reqUploadImg(goodId)
    console.log(res)
    if (res.code === '200') {
      commit('UPLOADIMG', res.message)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 用户更新个人资料
  async uploadInfo ({ commit }, data) {
    let res = await reqUploadInfo(data)
    console.log(res)
    if (res.code === '200') {
      // commit('UPLOADIMG', res.message)
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
      commit('GETPERMISSION', res.message)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 得到审核后的商品列表
  async adminPassList ({ commit }) {
    let res = await reqAdminPassList()
    console.log(res)
    if (res.code === '200') {
      commit('GETALLLIST', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  isrc (state) {
    const s = 'http://43.138.43.158:8082/api/getphoto?url=' + state.imgSrc
    return s
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
