import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import MovieBoard from "@/views/MovieBoard.vue";
import Callback from "@/components/Callback.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/movieboard" && !store.getters.isAuthenticated) {
    store.dispatch("login", { target: to.path });
  }

  return next();
});

export default router;
