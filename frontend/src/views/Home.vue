<template>
  <div class="home">
    <NavBarComponent :brand-title="brandTitle" />
    <LoginComponent />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "home",
  components: {
    NavBarComponent,
    LoginComponent
  },
  data() {
    return {
      brandTitle: "Movie Review Board"
    };
  }
};
</script>

<style scoped></style>
