# es6-react-template

> 印客学院 ES6 React 项目模板

## ⛰️ 能力支持

- [React](https://facebook.github.io/react): 前端页面展示框架；
- [Redux](https://github.com/reactjs/redux)：状态管理；
- [React Router](https://reacttraining.com/react-router)：前端路由；
- [Connected React Router](https://github.com/supasate/connected-react-router)：支持将 Redux 与 React Router 进行绑定；
- [Express](https://expressjs.com) 服务端；
- [TypeScript](https://www.typescriptlang.org) 类型检查；
- [Webpack](https://webpack.js.org) 打包构建工具；
- [Babel](https://babeljs.io)：ES6+ 转 ES5 工具；
- [nodemon](https://nodemon.io)：监测 Node 应用变化时，自动重启服务器；
- [axios](https://axios-http.com) 基于 Promise 的 HTTP 客户端；
- [react-helmet](https://github.com/nfl/react-helmet)：在客户端及服务端上管理标题、meta、样式和脚本标签；
- [loadable-component](https://github.com/smooth-code/loadable-components)：支持组件的懒加载；
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)：通过 Express 服务器提供 webpack 服务；
- [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)：支持基于 Express 的热更新；
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：打包分析工具；
- [morgan](https://github.com/expressjs/morgan)：服务器日志；
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)：压缩 JS ；
- [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)：压缩 CSS；

## 🛡️ 配置要求

- [node](https://nodejs.org/en) >= 12.0
- [npm](https://www.npmjs.com) >= 6.0

## 🔨 如何使用

1.下载代码仓库，执行如下指令

```sh
git clone git@github.com:encode-studio-fe/es6-react-template.git
cd es6-react-template
```

2.安装依赖

> 前提条件：使用最新版本的 pnpm

```sh
pnpm run init # pnpm install
```

3.执行指令

```sh
pnpm run build  # 打包依赖
pnpm run start  # 运行生产环境下的服务端
```

打开 [http://localhost:8080](http://localhost:8080)

> 注意：如果想切换端口号，请在 `./src/config`中修改。

## 🚀 运行指令

使用[cross-env](https://github.com/kentcdodds/cross-env)提供跨平台的设置及环境变量：

| `pnpm run <script>` | 描述                                                   |
| ------------------- | ------------------------------------------------------ |
| `dev`               | 在`localhost:3000`端口号上运行，并支持 HMR        |
| `dev:build`         | 在开发模式下打包至 `./public/server`                |
| `start`             | 在生成环境下启动服务器，在`localhost:8080`端口号上运行 |
| `build`             | 打包客户端和服务器端代码                               |
| `build:server`      | 打包服务器端代码，并置于 `./public/server`          |
| `build:client`      | 打包客户端代码，并置于 `./public/assets`              |
| `analyze:server`    | 服务器端代码打包内容可视化                             |
| `analyze:client`    | 客户端代码打包内容可视化                               |
