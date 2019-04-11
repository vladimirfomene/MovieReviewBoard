<template>
  <div class="spinner-border text-primary" role="status">
  	<span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/movieboard");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>


<style scoped>
div.spinner-border{
	margin: 10% auto;
}
</style>
