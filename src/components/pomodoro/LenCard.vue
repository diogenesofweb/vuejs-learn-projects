<template>
  <v-card class="ma-2 display-1 transparent" flat width="350px">
    <v-card-text>
      <div class="text-xs-center">{{ title }} Length</div>
    </v-card-text>

    <v-card-actions>
      <v-layout row fill-height>
        <v-flex xs4>
          <v-btn color="red darken-4" @click="$emit('plusMinus', 'plus', title)">
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>

        <v-flex xs4>
          <div>{{ length > 9 ? length : "0" + length }} : 00</div>
        </v-flex>

        <v-flex xs4>
          <v-btn color="red darken-4" @click="$emit('plusMinus', 'minus', title)">
            <v-icon>remove</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["length", "title"]
};
</script>