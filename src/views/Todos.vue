<template>
  <v-container>
    <TodoAdd @addTodo="addTodo"/>

    <TodoList :todos="items" @delTodo="delTodo" @doneTodo="doneTodo"/>
  </v-container>
</template>

<script>
import TodoAdd from "@/components/todos/TodoAdd";
import TodoList from "@/components/todos/TodoList";

export default {
  name: "todos",
  components: {
    TodoAdd,
    TodoList
  },
  data() {
    return {
      items: [
        { id: 1, title: "Todo or not Todo", done: false }
      ]
    };
  },
  mounted() {
    // console.log("mounted");
    if (localStorage.getItem('items')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'));
      } catch(e) {
        localStorage.removeItem('items');
      }
    }
  },
  watch: {
    items: function() {
      // console.log("watch");
      const parsed = JSON.stringify(this.items);
      localStorage.setItem('items', parsed);
    }
  },
  methods: {
    delTodo(id) {
      // console.log(id);
      this.items = this.items.filter(el => el.id != id);
    },
    doneTodo(id) {
      // console.log(id);
      this.items = this.items.map(el =>
        el.id == id ? { ...el, done: true } : el
      );
    },
    addTodo(val) {
      const newTodo = { id: Math.random(), title: val, done: false };
      const newArr = [...this.items, newTodo];
      // console.log(newArr);
      this.items = newArr;
    }
  }
};
</script>