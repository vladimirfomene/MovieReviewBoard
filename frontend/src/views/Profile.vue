<template>
  <div v-if="profile">
		<NavBarComponent v-bind:brand-title="brandTitle" />
    <div>
      <div>
        <img :src="profile.picture">
      </div>
      <div>
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.email }}</p>
      </div>
    </div>

    <div>
      <pre>{{ JSON.stringify(profile, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
	name: "profile",
	components: {
		NavBarComponent
	},
  data() {
    return {
			profile: this.$auth.profile,
			brandTitle: "Movie Review Board"
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
	}
};
</script>
