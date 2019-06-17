Vue.component('input-number2', {
  template: `
    <div>
      <button @click="handleIncrement(-1)">-</button>
      <!-- <input type="text" v-model="value" /> -->
      <input type="text" v-model.number="localCount" />
      <button @click="handleIncrement(1)">+</button>
    </div>
  `,
  // props: [],
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    },
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      // var localCount = this.value
      // location = 123
      localCount: this.value
    }
  },
  methods: {
    handleIncrement (num) {
      const min = this.min
      const max = this.max
      let count = this.localCount

      count += num

      if (count < min) {
        count = min
      }

      if (count > max) {
        count = max
      }

      this.localCount = count

      this.$emit('input', this.localCount)
    }
  }
})
