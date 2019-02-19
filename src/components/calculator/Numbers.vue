<template>
  <v-layout wrap row mt-3>
    <v-flex xs4 v-for="(n, i) in numbers" :key="i" my-2>
      <v-btn
        depressed
        flat
        large
        class="display-1 white--text"
        :disabled="n === '*'"
        @click="$emit('numPres', n)"
      >
        <span>{{n}}</span>
      </v-btn>
    </v-flex>
  </v-layout>
</template> 

<script>
export default {
  name: "numbers",
  data() {
    return {
      numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, "*", 0, "."]
    };
  }
};
</script>
