<template>
  <div class="nav">
    <nav class="navbar navbar-dark bg-primary" id="navbar">
      <router-link to="/movieboard" class="navbar-brand" id="brand-title">{{
        brandTitle
      }}</router-link>
      <ul v-show="isAuthenticated" class="nav justify-content-end">
        <li class="nav-item">
          <button
            class="btn btn-secondary"
            style="display: inline-block; margin-left: 10px;"
            @click="goToProfile"
          >
            Profile
          </button>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-secondary"
            style="display: inline-block; margin-left: 10px;"
            @click="logout"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbarcomponent",
  props: {
    brandTitle: String
  },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
    },
    goToProfile() {
      this.$router.push({ path: "/profile" });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped>
#brand-title {
  font-family: "Roboto Slab", serif;
}
#navbar {
  width: 100%;
}
</style>
