<template>
  <v-layout wrap row>
    <v-flex xs3 v-for="(oper,i) in operations" :key="i">
      <v-btn
        depressed
        class="blue-grey lighten-2 blue-grey--text text--darken-4"
        @click="$emit('operPres', oper.b)"
      >
        <v-icon>{{oper.a}}</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template> 

<script>
export default {
  name: "operations",
  data() {
    return {
      operations: [
        { a: "add", b: " + " },
        { a: "remove", b: " - " },
        { a: "*", b: " * " },
        { a: "/", b: " / " }
      ]
    };
  }
};
</script>
