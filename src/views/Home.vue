<template>
  <div>
    <BlogList/>
    <BlogsToShow/>
  </div>
</template>

<script>
// import BlogAdd from "../components/BlogAdd.vue";
import BlogsToShow from "../components/BlogsToShow.vue";
import BlogList from "../components/BlogList.vue";

export default {
  name: "home",
  components: {
    BlogsToShow,
    BlogList
  },
  data() {
    return {
      comp: "AppFooter"
    };
  },
  methods: {
    updateTitle(title) {
      return (this.title = title);
    }
  }
};
</script>

<style scoped>
p {
  color: rgb(31, 173, 31);
}
</style>
