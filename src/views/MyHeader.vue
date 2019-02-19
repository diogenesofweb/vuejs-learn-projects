<template>
  <nav>
    <v-toolbar flat app dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="primary--text">
        <span class="font-weight-light">My</span>
        <span>App</span>
      </v-toolbar-title>

      <v-btn-toggle v-model="toggle_one" mandatory class="ml-5 hidden-sm-and-down">
        <v-btn flat @click="$i18n.locale = 'ua'">ua</v-btn>
        <v-btn flat @click="$i18n.locale = 'en'">en</v-btn>
      </v-btn-toggle>

      <v-btn fab small flat class="ml-2 hidden-sm-and-down" @click="themeChange">
        <v-icon v-if="darkThemeIsOn">brightness_5</v-icon>
        <v-icon v-else>brightness_2</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.route"
        >{{ $t(`navbar.${link.text}`) }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar flat dark>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title px-4 primary--text">
              <span class="font-weight-light">My</span>
              <span>App</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t(`navbar.${link.text}`) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="pt-4">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>language</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t('settings.language') }}</v-list-tile-title>
          </v-list-tile-content>

          <v-btn-toggle>
            <v-btn flat @click="$i18n.locale = 'ua'">ua</v-btn>
            <v-btn flat @click="$i18n.locale = 'en'">en</v-btn>
          </v-btn-toggle>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings_brightness</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t('settings.darkTheme') }}</v-list-tile-title>
          </v-list-tile-content>

          <v-switch v-model="switch1" @change="themeChange"></v-switch>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
  props: ["darkThemeIsOn"],
  data() {
    return {
      drawer: false,
      switch1: this.darkThemeIsOn,
      toggle_one: "",
      langs: ["en", "ua"],
      links: [
        { icon: "home", text: "home", route: "/" },
        { icon: "note_add", text: "todos", route: "/todos" },
        { icon: "exposure", text: "calculator", route: "/calculator" },
        { icon: "alarm_add", text: "pomodoro", route: "/pomodoro" },
        { icon: "dashboard", text: "about", route: "/about" }
      ]
    };
  },
  methods: {
    themeChange() {
      this.$emit("themeChange");
      this.switch1 === true ? false : true;
    }
  }
};
</script>
