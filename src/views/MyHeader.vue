<template>
  <nav class="blue-grey darken-4">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo right">L</a>
      <ul id="nav-mobile" class="left hide-on-small-only">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(0, 182, 0);
}
</style>
