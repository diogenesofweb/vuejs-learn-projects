<template>
  <div id="add-blog">
    <h1>Add Blog</h1>
    <form action="#" v-if="!submitted">
      <label>Blog title</label>
      <input type="text" v-model.lazy="blog.title" required>
      
      <label>post:</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>One</label>
        <input type="checkbox" value="One" v-model="blog.category">
        <label>Two</label>
        <input type="checkbox" value="Two" v-model="blog.category">
        <label>Three</label>
        <input type="checkbox" value="Three" v-model="blog.category">
        <label>Four</label>
        <input type="checkbox" value="Four" v-model="blog.category">
      </div>

      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      
      <button @click.prevent="post">post</button>
    </form>
    <div v-if="submitted">post added</div>

    <hr>

    <div id="preview">
      <h3>Preview</h3>
      <p>title: {{blog.title}}</p>
      <p>content: {{blog.content}}</p>
      <p>categories:</p>
      <ul>
        <li v-for="cat in blog.category" :key="cat">{{cat}}</li>
      </ul>
      <p>author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogAdd",
  data() {
    return {
      blog: { title: "", content: "", category: [], author: "" },
      authors: ["red", "green", "yellow"],
      submitted: false
    };
  },
  methods: {
    post() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: {
            title: this.blog.title,
            body: this.blog.content,
            userId: 1
          }
        })
        .then(res => {
          console.log(res);
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
</style>
