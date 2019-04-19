<template>
  <div v-if="profile">
    <NavBarComponent :brand-title="brandTitle" />
    <div class="card" style="width: 18rem;">
      <img
        class="card-img-top"
        :src="userProfile.picture"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ userProfile.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ userProfile.nickname }}</li>
        <li class="list-group-item">{{ userProfile.gender }}</li>
        <li class="list-group-item">{{ userProfile.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "profile",
  components: {
    NavBarComponent
  },
  data() {
    return {
      profile: {},
      brandTitle: "Movie Review Board"
    };
  },
  computed: {
    ...mapGetters(["userProfile"])
  }
};
</script>

<style scoped>
.card {
  margin: 5% auto;
}
</style>
