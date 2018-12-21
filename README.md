# {{name}}

> {{description}}

## 安装

``` bash
# 初始化依赖
npm install

# 热编译 localhost:8080
npm run dev

# 生产打包
npm run build

# 添加页面
npm run add name
或者手动修改 app.json ，并添加 .vue .js 文件

# 带分析报告的生产包
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 目录结构
```
📦{{name}}
 ┣ 📂build  // webpack 配置
 ┣ 📂config // html 2 wxml， wxss 2 css 等配置 
 ┣ 📂dist // 输出小程序用的 wxml 等文件
 ┣ 📂node_modules
 ┣ 📂src
 ┃ ┣ 📂components // 组件
 ┃ ┣ 📂pages // 页面
 ┃ ┃ ┣ 📂counter // vuex 示例
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┃ ┗ 📜store.js
 ┃ ┃ ┣ 📂index // 普通示例页面
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜main.js
 ┃ ┃ ┗ 📂logs // 普通示例页面
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┃ ┗ 📜main.json
 ┃ ┣ 📂stylus // stylus 基础文件
 ┃ ┃ ┣ 📜base.styl // 全局公共 class
 ┃ ┃ ┣ 📜iconfont.styl // 字体图标
 ┃ ┃ ┣ 📜reset.styl // 重置默认样式
 ┃ ┃ ┗ 📜variable.styl // 样式变量
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜request.js // wx.request 二次封装
 ┃ ┃ ┣ 📜static.js // 静态变量配置
 ┃ ┃ ┗ 📜toast.js // 简化 wx 弹框
 ┃ ┣ 📜app.json // 页面配置
 ┃ ┣ 📜App.vue // 全局入口文件
 ┃ ┗ 📜main.js
 ┣ 📂static
 ┣ 📂tes
 ┃ ┣ 📂e2e
 ┃ ┣ 📂unit
 ┃ ┗ 📂mock // mock 数据
 ┣ 📜.babelrc
 ┣ 📜.editorconfig
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.postcssrc.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜package.swan.json
 ┣ 📜project.config.json
 ┗ 📜README.md
 ```

## 项目特性&支持的功能
以 mpvue 为基础架构,支持 vue 的大部分功能.
开发上与 vue 有少许差异，参考 [mpvue使用手册](http://mpvue.com/mpvue/#vue).

### 支持
 - `vuex`
 - `pug // template 设置 lang="pug" 否则使用原生 html` 不可使用 wxml
 - `stylus // style 设置 lang="stylus" 否则使用原生 css`
 - `iconfont // 含一个默认图标库，可以覆盖 stylus/iconfont.styl 修改`
 - `iview // 在 app.json、或者页面.json 中配置需要哪些组件` 
 - `mock // static.js 中设置 MOCK_DATA = true`

