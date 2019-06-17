# 第 7 章 Vue Router

## 单页面应用程序

- 网易云音乐
- coding
- 。。。



## 安装

### 直接下载 / CDN

<https://unpkg.com/vue-router/dist/vue-router.js>

在 Vue 后面加载 vue-router，它会自动安装的：

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

### NPM

```bash
npm install vue-router
```

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

如果使用全局的 script 标签，则无须如此 (手动安装)。



## Hello World

用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

## 动态路由匹配

> https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html

---

## 嵌套路由

> https://router.vuejs.org/zh/guide/essentials/nested-routes.html

---

## 编程式导航

> https://router.vuejs.org/zh/guide/essentials/navigation.html

---

## 命名路由

---

## 命名视图

---

## 重定向和别名

---

## 相关 API

### 路由对象 this.\$route

一个**路由对象 (route object)** 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的**路由记录 (route records)**。

路由对象是不可变 (immutable) 的，每次成功的导航后都会产生一个新的对象。

路由对象出现在多个地方:

- 在组件内，即 `this.$route`
- 在 `$route` 观察者回调内
- `router.match(location)` 的返回值

- **\$route.path**

  - 类型: `string`

    字符串，对应当前路由的路径，总是解析为绝对路径，如 `"/foo/bar"`。

- **\$route.params**

  - 类型: `Object`

    一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。

- **\$route.query**

  - 类型: `Object`

    一个 key/value 对象，表示 URL 查询参数。例如，对于路径 `/foo?user=1`，则有 `$route.query.user == 1`，如果没有查询参数，则是个空对象。

- **\$route.hash**

  - 类型: `string`

    当前路由的 hash 值 (带 `#`) ，如果没有 hash 值，则为空字符串。

- **\$route.fullPath**

  - 类型: `string`

    完成解析后的 URL，包含查询参数和 hash 的完整路径。

- **\$route.matched**

  - 类型: `Array<RouteRecord>`

  一个数组，包含当前路由的所有嵌套路径片段的**路由记录** 。路由记录就是 `routes` 配置数组中的对象副本 (还有在 `children` 数组)。

  ```js
  const router = new VueRouter({
    routes: [
      // 下面的对象就是路由记录
      {
        path: '/foo',
        component: Foo,
        children: [
          // 这也是个路由记录
          { path: 'bar', component: Bar }
        ]
      }
    ]
  })
  ```

  当 URL 为 `/foo/bar`，`$route.matched` 将会是一个包含从上到下的所有对象 (副本)。

- **\$route.name**

  当前路由的名称，如果有的话。(查看[命名路由](https://router.vuejs.org/zh/guide/essentials/named-routes.html))

- **\$route.redirectedFrom**

  如果存在重定向，即为重定向来源的路由的名字。(参阅[重定向和别名](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html))

### Router 实例

> 我们在组件中访问的 this.\$router 就是路由文件中创建的路由实例

| API     | 作用                 | 备注                                                                                                                                           |
| ------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| push    | 跳转，会形成历史记录 | 想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。 |
| replace | 路径替换             | 跳过去，别回来了                                                                                                                               |
| go      | 跳转到指定步骤的路由 |                                                                                                                                                |
| back    | 后退一步             |                                                                                                                                                |
| forward | 前进一步             |                                                                                                                                                |
|         |                      |                                                                                                                                                |
