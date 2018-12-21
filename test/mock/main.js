import mockjs from 'mockjs';

// key=url  value=result
const dataMap = {
  'test/list': {
    'id|1-100.1-10': 1,
    'age|1-100.1-10': 1,
    'name|String': 'zkx',
  },
  'gb/products': {
    'results|10': [
      {
        name: '@now()',
        date: '@now()',
      },
    ],
  },
};


export function mock(url) {
  return new Promise((resolve, reject) => {
    try {
      resolve(mockjs.mock(dataMap[url]));
    } catch (e) {
      reject();
    }
  });
}

export default {
  mock,
};
