const app = new Vue({
	el: '#app',
	data: {
		title: '任务清单',
		inputText: '',
		todos: [
			{ id: 1, title: '吃饭', completed: false },
			{ id: 2, title: '睡觉', completed: true },
			{ id: 3, title: '写代码', completed: true }
		],
		currentEdit: null // 存储当前双击的任务项
	},
	methods: {
		handleAdd () {
			// 1. 获取文本框数据
			const inputText = this.inputText.trim()

			// 2. 非空校验
			// if (!inputText.length) {
			if (inputText.length === 0) {
				return
			}

			// 3. 添加数据到 todos 中
			this.todos.push({
				id: Math.random(),
				title: inputText,
				completed: false
			})

			// 4. 清空文本框
			this.inputText = ''
		},

		handleDelete (index) {
			console.log(index)
			this.todos.splice(index, 1)
		},

		getClearCompletedStat () {
			return this.todos.some(item => item.completed === true)

			// some 也是用于遍历数组
			// 每遍历一次就会调用一次
			// 	结果 = function (遍历项, 索引) { return item.completed === true }
			// 	说白了，如果有元素满足 item.completed === true 条件，那么 some 就停止遍历，返回 ture
			// 	如果直到遍历结果，都没有元素满足 item.completed === true 条件，则返回 false
			// const ret = this.todos.some(function (item, index) {
			// 	console.log(item, index)
			// 	return item.completed === true
			// })

			// return ret
		},

		handleClearCompleted () {
			// 删除所有已完成任务项
			const todos = this.todos
			for (let i = 0; i < todos.length; i++) {
				if (todos[i].completed === true) {
					todos.splice(i, 1)
					i--
				}
			}
		},

		/**
		 * 获取所有未完成任务数量
		 */
		getRemainingCount () {
			return this.todos
				.filter(item => item.completed === false)
				.length
		},

		/**
		 * 保存编辑
		 */
		handleSaveEdit (item, e) {
			// 要修改的数据
			// 编辑文本框的内容
			item.title = e.target.value

			// 退出编辑状态
			this.currentEdit = null
		},

		/**
		 * 取消编辑
		 */
		handleCancelEdit () {
			this.currentEdit = null
		}

		// getClearCompletedStat () {
		// 	console.log('getClearCompletedStat')
		// 	const todos = this.todos
		// 	let isHas = false
		// 	for (let i = 0; i < todos.length; i++) {
		// 		if (todos[i].completed === true) {
		// 			isHas = true
		// 			break
		// 		}
		// 	}
		// 	// 数组.some
		// 	return isHas
		// }
	}
})
