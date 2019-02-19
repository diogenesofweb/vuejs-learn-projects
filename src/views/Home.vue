<template>
  <v-container app>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3>
        <v-text-field prepend-icon="search" v-model="search"></v-text-field>
      </v-flex>

      <v-flex
        class="xs12 sm10 offset-sm1 lg8 offset-lg2 mt-3"
        v-for="(blog, i) in filtredItems"
        :key="i"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ blog.title }}</div>
              <span class="grey--text">{{ blog.body }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary" router :to="`/blog/${blog.id}`">{{ $t('blogs.readMore') }}</v-btn>
            <v-btn flat color="red" @click="deleteBlog(`${blog.id}`)">{{ $t('blogs.del') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import searchMixin from "@/mixins/searchMixin";

export default {
  name: "home",
  data() {
    return {
      items: [],
      search: ""
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => res.json())
      .then(json => {
        this.items = json.map(e => ({
          ...e,
          body: e.body.slice(0, 100) + " ..."
        }));
      });
  },
  methods: {
    deleteBlog(id) {
      this.items = this.items.filter(e => e.id != id);
    }
  },
  mixins: [searchMixin]
};
</script>
