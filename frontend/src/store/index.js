import Vue from "vue";
import Vuex from "vuex";
import movie from "./modules/movie";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie,
    auth
  }
});
