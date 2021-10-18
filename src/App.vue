<template>
	<div class="app__inner">
		<MovieSearchHeader v-model="movieName" />
		<Loader />
		<RouterView />
	</div>
</template>
<script>
import MovieSearchHeader from '~/components/MovieSearchHeader'
import Loader from '~/components/Loader'

export default {
	components: { MovieSearchHeader, Loader },
	data() {
		return {
			movieName: '',
		}
	},
	watch: {
		movieName(newValue) {
			this.movieName = newValue
			this.findMovies()
		},
	},
	created() {
		this.$store.dispatch('user/initialize')
	},
	methods: {
		findMovies() {
			this.$store.dispatch('movies/initialFetchMovies', this.movieName)
		},
	},
}
</script>

<style lang="scss" scoped>
.app__inner {
	font-family: 'Poppins', sans-serif;
}
</style>
