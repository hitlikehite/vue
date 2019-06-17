<!-- 
  创建一个单文件组件：
    既不是全局，也不是
  只是一个组件而已。
  如何使用这个组件？
  注册使用：
    全局注册
      在 main.js 中：
        首先 import 组件
        然后 Vue.component('组件名', 组件)
    局部注册
      在需要使用该组件的组件中：
        1. import 名字 from '组件路径'
        2. 将组件注册到 components 选项中
    提示：哪个组件需要，哪个组件就 import 加载和注册它，可以被任意个组件注册和使用它
 -->
<template>
  <div>
    <p>Foo 组件</p>
    <p>{{ message }}</p>
    <Bar></Bar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'foo message'
      }
    }
  }
</script>

<!-- 
  组件的样式
  scoped 表示作用域
 -->
<style scoped>
  div {
    padding: 5px;
    border: 1px solid #000;
  }
</style>
