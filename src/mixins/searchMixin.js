export default {
  computed: {
    filtredPosts() {
      return this.posts.filter(post => post.title.match(this.search));
    }
  }
};
