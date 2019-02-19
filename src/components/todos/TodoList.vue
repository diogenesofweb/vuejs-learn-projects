<template>
  <v-layout row wrap>
    <v-flex v-for="(todo, i) in todosList" :key="i" class="mt-1 xs12 sm10 offset-sm1">
      <v-card flat>
        <v-layout>
          <v-flex class="xs10">
            <div
              :style="todo.done ? {'text-decoration': 'line-through'} : {'text-decoration': 'none'}"
              class="subheading pa-3"
            >{{todo.title}}</div>
          </v-flex>

          <v-flex class="xs1">
            <v-btn small flat fab :disabled="todo.done" @click="$emit('doneTodo', todo.id)">
              <v-icon class="green--text">done</v-icon>
            </v-btn>
          </v-flex>

          <v-flex class="xs1">
            <v-btn small flat fab @click="$emit('delTodo', todo.id)">
              <v-icon class="red--text">delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex v-if="!todosList.length" class="mt-5 xs12 sm10 offset-sm1">
      <h3 class="text-xs-center display-3">{{ $t('todos.noTodos') }}</h3>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["todos"],
  computed: {
    todosList() {
      let arr = this.todos;
      return arr.sort((a, b) => (a.done > b.done ? 1 : -1));
    }
  }
};
</script>

<style>
</style>
