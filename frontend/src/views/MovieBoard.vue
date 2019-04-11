<template>
	<NavBarComponent v-bind:brand-title="brandTitle" />
</template>


<script>

import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
	name: "movieboard",
	components: {
		NavBarComponent
	},
	data(){
		return {
			brandTitle: "Movie Review Board"
		};
	}
}
</script>


<style scoped>

</style>


