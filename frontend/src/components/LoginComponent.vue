<template>
	<div class="card" id="login-card">
		<div class="card-body">
			<p class="card-text" id="welcome-text">Sign in to start rating your favorite movies.</p>
			<a href="#" class="btn btn-primary" id="login-btn" @click.prevent="login">Login Here</a>
		</div>
	</div>
</template>

<script>

export default {
	name: "logincomponent",
	methods: {
		login(){
			this.$auth.login();
		}
	}
}
</script>


<style scoped>
#login-btn{
	font-family: 'Open Sans', sans-serif;
}
#welcome-text{
	font-family: 'Roboto Slab', serif;
}
#login-card{
	max-width: 50%;
	margin: 10% auto;
}
</style>


