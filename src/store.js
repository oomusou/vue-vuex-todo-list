import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { task: 'I have a pen', done: false },
      { task: 'I have an apple', done: false },
      { task: 'ahh apple-pen', done: false },
    ],
  },
  getters: {
    itemsNotDone(state) {
      return state.todos.filter(item => !item.done).length;
    },
    itemsDone(state, getters) {
      return state.todos.length - getters.itemsNotDone;
    },
    taskByIndex: state => index => state.todos[index].task,
  },
  mutations: {
    addItem(state, payload) {
      state.todos.push({ task: payload, done: false });
    },
    finishItem(state, index) {
      state.todos[index].done = true;
    },
  },
  actions: {

  },
});
