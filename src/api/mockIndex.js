import requests from './request'
export const reqGetbannnerlist = () => requests({
  url: '/mock/banner',
  method: 'get'
})
