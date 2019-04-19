import axios from "axios";

const SERVER_URL = "http://localhost:8888/graphql";

const state = {
  movies: []
};

const mutations = {
  UPDATE_MOVIES(state, payload) {
    state.movies = payload;
  },
  UPDATE_MOVIE_RATING(state, payload) {
    if (state.movies.length > 0) {
      state.movies.forEach(movie => {
        if (payload.id == movie.id) {
          movie.rating = payload.rating;
        }
      });
    }
  }
};

const actions = {
  getMovies(context, payload) {
    axios({
      method: "POST",
      url: SERVER_URL,
      data: {
        query: `
					{
						findAllMovies{
							id
							title
							director{
								firstName
								lastName
							}
							rating
							releaseDate
						}
					}`
      },
      headers: { authorization: `Bearer ${payload}` }
    })
      .then(response => {
        context.commit("UPDATE_MOVIES", response.data.data.findAllMovies);
      })
      .catch(error => {
        console.log(error);
      });
  },
  updateMovieRating(context, payload) {
    axios({
      method: "POST",
      url: SERVER_URL,
      data: {
        query: `
					mutation {
						updateMovieRating(movieId: ${payload.id}, vote: ${payload.vote})
					}`
      },
      headers: { Authorization: `Bearer ${payload.accessToken}` }
    })
      .then(response => {
        payload.rating = response.data.data.updateMovieRating;
        context.commit("UPDATE_MOVIE_RATING", payload);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
const getters = {
  movies: state => state.movies
};

const movieModule = {
  state,
  mutations,
  actions,
  getters
};

export default movieModule;
