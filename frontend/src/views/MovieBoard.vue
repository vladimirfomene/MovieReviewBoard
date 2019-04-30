<template>
  <div class="movie-board">
    <NavBarComponent :brand-title="brandTitle" />
    <div class="card-columns">
      <MovieComponent v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBarComponent from "@/components/NavBarComponent.vue";
import MovieComponent from "@/components/MovieComponent.vue";

export default {
  name: "movieboard",
  components: {
    NavBarComponent,
    MovieComponent
  },
  data() {
    return {
      brandTitle: "Movie Review Board"
    };
  },
  computed: {
    ...mapGetters(["movies", "accessToken"])
  },
  created() {
    if (this.accessToken) {
      this.$store.dispatch("getMovies", this.accessToken);
    }
  }
};
</script>

<style scoped>
.card-columns {
  margin: 3% 2% 3% 2%;
}
</style>
