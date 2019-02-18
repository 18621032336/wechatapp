const fs = require('fs')

let [, , path] = process.argv

let vuePath = `./src/pages/${path}/index.vue`
let jsPath = `./src/pages/${path}/main.js`
let dirPath = `./src/pages/${path}`
let options = {
  flag: 'wx+'
}

// 目标文件夹是否已经存在
if (!fs.existsSync(dirPath)) {
  let pathList = path.split('/')
  pathList.forEach((path, i) => {
    let basePath = pathList.slice(0, i + 1).join('/')
    fs.mkdirSync(`./src/pages/${basePath}`)
  })
}

if (fs.existsSync(vuePath) || fs.existsSync(jsPath)) {
  throw SyntaxError('目标文件已存在')
}

// vue
fs.writeFileSync(vuePath, `
<template lang="pug">
  div.container ${path}
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style scoped lang="stylus">
</style>
`, options)

// main.js
fs.writeFileSync(jsPath, `
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

`, options)

try {
  let appJSONPath = './src/app.json'
  let json = JSON.parse(fs.readFileSync(appJSONPath).toString())

  json.pages.push(`pages/${path}/main`)

  fs.writeFileSync(appJSONPath, JSON.stringify(json, null, '  '))
} catch (e) {
  console.log(e, '设置 app.json 异常')
}

console.log('success')
