<template>
  <v-card class="ma-2 mt-5 display-1 transparent" min-width="450px" elevation="24">
    <v-card-text>
      <div class="text-xs-center">{{ title }}</div>
    </v-card-text>

    <v-card-actions>
      <v-layout align-center justify-center row wrap fill-height>
        <v-flex xs12>
          <div v-show="minutes !== null">{{ minutes > 9 ? minutes : "0" + minutes }} : {{ seconds > 9 ? seconds : "0" + seconds }}</div>
        </v-flex>

        <v-flex xs12 class="pt-3">
          <v-btn color="red darken-4" @click="$emit('playPause')">
            <v-icon>play_arrow</v-icon>
            <!-- <v-icon>pause</v-icon>  -->
          </v-btn>

          <v-btn color="red darken-4" @click="$emit('replay')">
            <v-icon>replay</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["title", "seconds", "minutes"]
};
</script>
