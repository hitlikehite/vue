// import 类似于我们学过的 require
// 加载 Vue
import Vue from 'vue'

// 加载 App.vue 根组件
import App from './App.vue'
import Bar from './Bar.vue'

Vue.component('Bar', Bar)

Vue.config.productionTip = false

// 创建根实例，挂载到 #app 的节点中
new Vue({
  // 将 App 组件替换到入口节点，就相当于把 index.html 页面中的 <div id="app"></div> 写到了 App.vue 组件中了
  // 这样的话，我们就不关注 html 页面了，全部是组件
  render: h => h(App),
}).$mount('#app') // 等价于 el: '#app'
