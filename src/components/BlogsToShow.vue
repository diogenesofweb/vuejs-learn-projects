<template>
  <div class="container">
    <h1 @click="fff" class="section">Posts:</h1>
    <p>{{color}}</p>

    <input type="text" v-model="search" placeholder="search" class="white-text">

    <div v-for="p in filtredPosts" :key="p.id" class="card blue-grey darken-">
      <div class="card-content">
        <span v-rainbow class="card-title">{{p.title | uppercase}}</span>
        <p>{{p.body | snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchMixin from "../mixins/searchMixin";

export default {
  name: "BlogsToShow",
  data() {
    return {
      posts: [],
      color: "red",
      search: ""
    };
  },
  methods: {
    fff() {
      this.color = this.color === "red" ? "green" : "red";
    }
  },
  computed: {
    //
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      // .then(res => console.log(res));
      .then(res => (this.posts = res.data));
  },
  filters: {
    uppercase(val) {
      return val.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
</style>
