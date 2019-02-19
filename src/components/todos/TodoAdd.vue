<template>
  <v-layout my-3 wrap>
    <v-flex class="xs12 md10 offset-md1">
      <v-form @submit.prevent="$emit('addTodo', todo)">
        <v-text-field v-model="todo" box clearable prepend-icon="edit"></v-text-field>
        <div class="text-xs-center">
          <v-btn
            large
            depressed
            color="green"
            @click="$emit('addTodo', todo)"
          >{{ $t('todos.addTodos') }}</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      todo: ""
    };
  }
};
</script>
