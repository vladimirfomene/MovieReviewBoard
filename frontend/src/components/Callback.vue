<template>
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
import EventBus from "./../event-bus";

export default {
  name: "callback",
  methods: {
    handleLogin() {
      this.$router.push("/movieboard");
    }
  },
  created() {
    this.$store.dispatch("handleAuthentication");
    EventBus.$on("login", () => this.handleLogin());
  }
};
</script>

<style scoped>
div.spinner-border {
  margin: 10% auto;
}
</style>
