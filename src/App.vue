<template>
  <div id="app">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="finishItem(index)" :key="index">
        {{ item.task }}, {{ item.done }}
      </li>
    </ul>
    <h2>Not done : {{ itemsNotDone }}</h2>
    <h2>Done : {{ itemsDone }}</h2>
    <h2>Task : {{ taskByIndex(index) }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      input: '',
      index: 0,
    };
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['itemsNotDone', 'itemsDone', 'taskByIndex']),
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.input);
      this.input = '';
    },
    finishItem(index) {
      this.$store.commit('finishItem', index);
      this.index = index;
    },
  },
};
</script>

<style>
</style>
