import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: () => import("./views/BlogSingle.vue")
    },
    {
      path: "/calculator",
      name: "calculator",
      component: () => import("./views/Calculator.vue")
    },
    {
      path: "/pomodoro",
      name: "pomodoro",
      component: () => import("./views/Pomodoro.vue")
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("./views/Todos.vue")
    }
  ]
});
