import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "http://localhost:8888/graphql";

const state = {
  movies: [],
  isAuthenticated: false
};

const mutations = {
  UPDATE_MOVIES(state, payload) {
    state.movies = payload;
  },
	UPDATE_AUTHENTICATION_STATUS(state, payload){
		state.isAuthenticated = payload;
	},
  UPDATE_MOVIE_RATING(state, payload) {}
};

const actions = {
  getMovies(context, payload) {
    axios({
      method: "POST",
      url: BASE_URL,
      data: {
        query: `
							{
									movie {
											title,
											releaseDate,
											rating,
											director
									}
							}
					`
      }
    });
  },
  updateAuthenticationStatus(context, payload) {
    context.commit("UPDATE_AUTHENTICATION_STATUS", payload);
  }
};

const getters = {
	movies: state => state.movies,
	isAuthenticated: state => state.isAuthenticated,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
