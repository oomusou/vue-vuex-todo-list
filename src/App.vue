<template>
  <div id="app">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="finishItem(index)" :key="index">
        {{ item.task }}, {{ item.done }}
      </li>
    </ul>
    <h2>Not done : {{ itemsNotDone }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      input: '',
    };
  },
  computed: {
    ...mapState(['todos']),
    itemsNotDone() {
      return this.$store.state.todos.filter(item => !item.done).length;
    },
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.input);
      this.input = '';
    },
    finishItem(index) {
      this.$store.commit('finishItem', index);
    },
  },
};
</script>

<style>
</style>
