import { BASE_URL, MOCK_DATA } from './static';

import { mock } from '../../test/mock/main';

/**
 * post 请求
 * @param url
 * @param data
 * @param header
 */
export function post({
  url,
  data,
  header,
  method = 'post',
}) {
  if (MOCK_DATA) {
    return mock(url, data);
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      data,
      header,
      method,
      dataType: 'json',
      success(res) {
        resolve(res.data);
      },
      fail(e) {
        reject(e);
      },
    });
  });
}

/**
 * get 请求
 * @param url
 * @param data
 * @param header
 */
export function get(params) {
  let { url, data, header } = params;
  if (typeof params === 'string') {
    url = params;
    data = {};
    header = {};
  }
  return post({
    url,
    data,
    header,
    method: 'get',
  });
}

export default {
  post,
  get,
};
