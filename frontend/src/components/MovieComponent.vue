<template>
	<div class="card" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
		<div class="card-body">
			<h5 class="card-title">Title: {{ movie.title }}</h5>
			<p class="card-text">Rating: {{ movie.rating }}</p>
			<a href="#" class="card-link">Release Date: {{ movie.releaseDate }}</a>
			<a href="#" class="card-link">Director: {{ movie.director }}</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "moviecomponent",
	computed: {
		
	},
	created(){
		this.$store.dispatch("getMovies", );
	}
}
</script>

<style scoped>

</style>


