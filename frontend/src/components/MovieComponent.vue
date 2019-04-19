<template>
  <div class="card text-left" style="width: 22rem;">
    <div class="card-header">
      <h4 class="card-heading">{{ movie.title }}</h4>
      <div class="rating-arrow" style="display: inline-block">
        <font-awesome-icon
          size="2x"
          icon="angle-up"
          @click="updateMovieRating(1)"
        />
        <font-awesome-icon
          size="2x"
          icon="angle-down"
          @click="updateMovieRating(-1)"
        />
      </div>
    </div>
    <div class="card-body">
      <span class="card-text">Rating: {{ movie.rating }}</span
      ><br />
      <a href="#" class="card-link">Release Date: {{ movie.releaseDate }}</a
      ><br />
      <a href="#" class="card-link">Director: {{ fullName(movie.director) }}</a
      ><br />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "moviecomponent",
  props: ["movie"],
  computed: {
    ...mapGetters(["accessToken"])
  },
  methods: {
    fullName(director) {
      return `${director.firstName} ${director.lastName}`;
    },
    updateMovieRating(vote) {
      this.$store.dispatch("updateMovieRating", {
        id: this.movie.id,
        vote,
        accessToken: this.accessToken
      });
    }
  }
};
</script>

<style scoped>
h4.card-heading {
  display: inline-block;
  text-align: left;
}
.rating-arrow {
  float: right;
}
</style>
