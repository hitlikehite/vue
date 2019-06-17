/**
 * 注册组件
 *   全局注册
 *     语法：Vue.component('组件名称', 组件选项对象)
 *   局部注册
 * 组件就是特殊的 Vue 实例，它也有自己的组件选项，大多数和 Vue 实例的 API 都是一样的
 * 组件不需要 el，因为它的模板是 template
 * 组件的 template
 *   只能有一个根节点
 * 组件的 data
 *   组件也有自己的数据状态 data
 *   可以在组件的模板中访问组件自己的数据
 *   组件的 data 必须是函数，函数中返回一个 {} 对象作为组件的 data 数据对象
 * 组件是私有的作用域
 *   内部无法访问外部
 *   外部也无法访问内部
 * 即便当你复用组件的时候，数据也是相互独立的
 * 组件的 methods
 *
 * 组件的组织
 */

Vue.component('foo', {
  template: `
    <div class="foo">
      <p>{{ message }}</p>
      <input type="text" v-model="message" />
      <button @click="handleClick">点击改变 message</button>
    </div>
  `,
  data () {
    return {
      message: 'foo message',
      count: 0
    }
  },

  methods: {
    handleClick () {
      this.message = 'hello'
    }
  }
})
