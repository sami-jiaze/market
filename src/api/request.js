import axios from 'axios'
import nprogress from 'nprogress'
import store from '@/store'
import 'nprogress/nprogress.css'

const requests = axios.create({
  timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start()
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  } else if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (_error) => {
  return Promise.reject(new Error('failed'))
})

export default requests
