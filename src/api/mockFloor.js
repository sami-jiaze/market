import requests from './request'
export const reqFloorList = () => requests({
  url: '/mock/floor',
  method: 'get'
})
