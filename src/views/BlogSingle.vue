<template>
  <v-container app fluid grid-list-lg mt-5>
    <v-layout>
      <v-flex class="xs12 sm10 md8 lg6 offset-sm1 offset-lg3 offset-md2">
        <v-card class="my-5">
          <v-card-title primary-title>
            <div>
              <div class="headline text-xs-center pb-4">{{blog.title}}</div>
              <p>{{blog.body}}</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: { title: "Loading ..." }
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(res => res.json())
      .then(json => (this.blog = json));
  }
};
</script>
