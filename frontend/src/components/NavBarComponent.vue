<template>
	<div class="nav">
		<nav class="navbar navbar-dark bg-primary" id="navbar">
			<a class="navbar-brand" id="brand-title">{{ brandTitle }}</a>
			<ul class="nav justify-content-end">
				<li class="nav-item">
					<router-link to="/profile" class="nav-link">Profile</router-link>
				</li>
				<li class="nav-item">
					<button @click="logout">Logout</button>
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
		logout(){
			this.$auth.logOut();
		}
	}
}
</script>


<style scoped>
#brand-title{
	font-family: 'Roboto Slab', serif;
}
#navbar{
	width: 100%;
}
</style>



