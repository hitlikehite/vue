Vue.component('input-number', {
  template: `
    <div>
      <button @click="handleIncrement(-1)">-</button>
      <!-- .number 修饰符自动将文本类型转为数字类型 -->
      <input type="text" v-model.number="count" />
      <button @click="handleIncrement(1)">+</button>
      <button @click="changeMin">修改min</button>
    </div>
  `,
  // 组件的 props，就好比函数的 () 参数
  // 用来声明接受用户传递的属性数据
  // 然后我们就可以通过 Vue 实例直接访问 props 中的数据了
  props: ['min', 'max'],
  data () {
    return {
      // 我们可以直接在 data 中访问 props 中的数据
      count: this.min
    }
  },

  methods: {
    handleIncrement (num) {
      const min = this.min
      const max = this.max
      let count = this.count

      count += num

      if (count < min) {
        count = min
      }

      if (count > max) {
        count = max
      }

      this.count = count

      // 发布一个自定义事件，将内部的 count 作为参数传出去
      this.$emit('hello', this.count)
    },

    changeMin () {
      this.min = 100
    }
  }
})
