<template>
  <div id="app">
    <MyHeader/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from "./views/MyHeader";
import MyFooter from "./views/MyFooter";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>


<style>
body {
  text-align: center;
  background-color: #2b2b2b;
  color: aliceblue;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
