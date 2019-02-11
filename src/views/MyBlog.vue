<template>
  <div class="row">
    <div class="col s12 m8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{blog.title}}</span>
          <p>{{blog.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(res => res.json())
      .then(json => (this.blog = json));
  }
};
</script>

<style>
</style>
