<template>
  <v-app :dark="darkThemeIsOn">
    <MyHeader @themeChange="themeChange" :darkThemeIsOn="darkThemeIsOn"/>
    <v-content>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </v-content>
    <MyFooter/>
  </v-app>
</template>

<script>
import MyHeader from "./views/MyHeader";
import MyFooter from "./views/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      darkThemeIsOn: true,
      settings: [
        { icon: "language", text: "Language" },
        { icon: "settings_brightness", text: "Dark Theme" }
      ]
    };
  },
  mounted() {
    if (localStorage.darkThemeIsOn) {
      this.darkThemeIsOn = localStorage.darkThemeIsOn === "false" ? false : true;
    }
  },
  methods: {
    themeChange() {
      this.darkThemeIsOn = !this.darkThemeIsOn;
      localStorage.darkThemeIsOn = this.darkThemeIsOn;
    }
  }
};
</script>
