<!-- 
  组件的模板 
  注意：有且只能有一个根节点
-->
<template>
  <div id="app">
    <p>App 组件</p>
    <p>{{ message }}</p>
    <input type="text" v-model="message">
    <button @click="handleClick">点击修改 message</button>
    <br>
    <br>
    <Bar></Bar>
    <br>
    <br>
    <Foo></Foo>
  </div>
</template>

<!-- 
  组件的 JavaScript 行为
  支持模块化，可以像在 Node 中一样去加载别的模块
 -->
<script>
  // 就好比 const Foo = require('./Foo.vue')
  import Foo from './Foo.vue'

  // 组件的选项（data、methods、生命周期钩子。。。。）写到一个对象中，并默认导出
  // export default 就好比 module.exports = {  }
  export default {
    // template，组件的模板就上面的 template 标签中的内容
    components: {
      // Foo: Foo
      // Abc: Foo
      Foo
    },
    data () {
      return {
        message: 'app message'
      }
    },

    created () {
      console.log('created')
    },

    methods: {
      handleClick () {
        this.message = 'hello'
      }
    }
  }
</script>

<!-- 
  组件的样式
  支持作用域
  支持 CSS 预处理器（less、sass、stylus....）
 -->
<style>
</style>
