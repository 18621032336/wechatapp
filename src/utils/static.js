// 测试地址
const TEST_API_URL = 'https://api.yimishiji.com/';
// 生产地址
const PRO_API_URL = 'https://api.yimishiji.com/';

// 接口地址
export const BASE_URL = process.env.NODE_ENV === 'production' ? PRO_API_URL : TEST_API_URL;

// 是否使用 mock 数据
export const MOCK_DATA = false;

export default {
  BASE_URL,
  MOCK_DATA,
};
