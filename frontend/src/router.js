import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MovieBoard from "@/views/MovieBoard.vue";
import Director from "@/views/Director.vue";
import Callback from "@/components/Callback.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue")
    },
    {
      path: "/movieboard",
      name: "movieboard",
      component: MovieBoard
    },
    {
      path: "/director",
      name: "director",
      component: Director
    }
  ]
});
