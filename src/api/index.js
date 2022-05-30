import requests from './request'
// 获取三级导航
export const reqCategoryList = () => requests({
  url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',
  // url: 'http://43.138.43.158:8082/api/product/getBaseCategoryList',
  method: 'get'
})
// 获取搜索结果
export const reqGetSearchInfo = (params) => requests({
  url: 'http://gmall-h5-api.atguigu.cn/api/list',
  // url: 'http://43.138.43.158:8082/api/list',
  method: 'post',
  data: params
})
// 获取产品详情
export function reqGoodsInfo (skuId) {
  return requests({
    method: 'get',
    url: `http://gmall-h5-api.atguigu.cn/api/item/${skuId}`,
    // url: `http://43.138.43.158:8082/api/item/${skuId}`,
    // url: 'http://43.138.43.158:8082/api/item/1'
    params: {
      skuId: skuId
    }
  })
}
// 添加到购物车
export function reqAddShopCart (skuId, skuNum) {
  return requests({
    url: `http://gmall-h5-api.atguigu.cn/api/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}
// 获取购物车列表
export function reqCartList () {
  return requests({
    method: 'get',
    url: 'http://gmall-h5-api.atguigu.cn/api/cart/cartList',
    // url: 'http://43.138.43.158:8082/api/cart/cartList'
  })
}
// 删除购物车商品
export function reqDeleteCartById (skuId) {
  return requests({
    method: 'delete',
    url: `http://gmall-h5-api.atguigu.cn/api/cart/deleteCart/${skuId}`
  })
}
// 修改商品选中状态
export function reqUpdateChecked (skuId, isChecked) {
  return requests({
    method: 'get',
    url: `http://gmall-h5-api.atguigu.cn/api/cart/checkCart/${skuId}/${isChecked}`
  })
}
// 注册接口
export function reqUserRegister (data) {
  return requests({
    method: 'post',
    // url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/register',
    url: 'http://43.138.43.158:8082/api/user/passport/register',
    data
  })
}
// 登录接口
export function reqUserLogin (data) {
  return requests({
    method: 'post',
    // url: 'http://106.52.167.146:8001/api/user/passport/login',
    url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/login',
    data
  })
}
// 获取用户信息
export function reqUserInfo () {
  return requests({
    method: 'get',
    url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo'
    // url: 'http://106.52.167.146:8001/api/user/passport/auth/getUserInfo'
  })
}
// 退出登录
export function reqLogout () {
  return requests({
    method: 'get',
    url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/logout'
  })
}
// 获取验证码
export function reqRegCode () {
  return requests({
    method: 'get',
    url: 'http://43.138.43.158:8082/api/user/passport/code'
  })
}
// 获取商品清单
export function reqOrderInfo () {
  return requests({
    method: 'get',
    url: 'http://gmall-h5-api.atguigu.cn/api/order/auth/trade'
  })
}
// 提交订单
export function reqSubmitOrder (tradeNo, data) {
  return requests({
    method: 'post',
    url: `'http://gmall-h5-api.atguigu.cn/api/order/auth/submitOrder?tradeNo=${tradeNo}'`,
    data
  })
}
// 用户上传功能
export function reqUpload (data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:8082/api/upload',
    data
  })
}
// 权限获取
export function reqPermission () {
  return requests({
    method: 'get',
    url: 'http://106.52.167.146:8001/api/user/info/get/permission'
  })
}
// 管理员获取审核列表
export function reqAdminList () {
  return requests({
    method: 'get',
    url: 'http://43.138.43.158:8082/admin/list'
  })
}
// 管理员删除功能
export function reqAdminDelete (skuId) {
  return requests({
    method: 'DELETE',
    url: `http://43.138.43.158:8082/admin/delete?skuId=${skuId}`
  })
}
// 管理员通过功能
export function reqAdminPass (skuId) {
  return requests({
    method: 'post',
    url: `http://43.138.43.158:8082/admin/update?skuId=${skuId}`
  })
}
