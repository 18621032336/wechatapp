import { BASE_URL, MOCK_DATA } from './static'

import { mock } from '../../test/mock/main'

const DefaultHeader = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

/**
 * post 请求
 * @param url
 * @param data
 * @param header
 * @param method get 请求可以复用
 */
export function post (url, data, method = 'post', header = DefaultHeader) {
  // 返回 mock 数据
  if (MOCK_DATA) {
    return mock(url, data)
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      data,
      header,
      method,
      dataType: 'json',
      success (res) {
        resolve(res.data)
      },
      fail (e) {
        reject(e)
      }
    })
  })
}

/**
 * get 请求
 * @param url
 * @param data
 */
export function get (url, data) {
  return post(url, data, 'get')
}

export default {
  install (Vue) {
    Vue.prototype.$get = get
    Vue.prototype.$post = post
  }
}
