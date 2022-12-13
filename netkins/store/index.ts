export const state = () => ({
	tasks: []
})

export const mutations = {
	addTask(state, task) {
		// state.tasks = [{ content: task, done: false }, ...state.tasks];
		state.tasks.unshift ({ content: task, done: false });
	},
	removeTask(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	toogleTask(state, task): string {
		task.done = !task.done;
	}
}