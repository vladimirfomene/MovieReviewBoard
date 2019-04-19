<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  created() {
    if (localStorage.getItem("loggedIn") === "true" && !this.accessToken) {
      this.$store
        .dispatch("renewTokens")
        .then(() => {
          this.$store.dispatch("getMovies", this.accessToken);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapGetters(["accessToken"])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
