<template>
	<section ref="container" class="container">
		<article v-for="movie in movieList" :key="movie.Title">
			<div class="moviePoster">
				<div class="poster" :data-runtime="movie.Runtime">
					<img :src="movie.Poster" />
				</div>
			</div>
			<div class="movieInfo">
				<h3>{{ movie.Title }}</h3>
				<span class="genre">{{ movie.Genre }}</span>
				<p>{{ movie.Plot }}</p>
				<span class="rating">Rating - {{ movie.imdbRating }} / 10</span>
			</div>
		</article>
	</section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
	data() {
		return {
			io: null,
		}
	},
	computed: {
		...mapState('movies', ['movieList']),
		...mapGetters('movies', ['movieListLen']),
	},
	mounted() {
		this.io = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.$store.dispatch('movies/fetchMovies')
				}
			})
		})
	},
	updated() {
		if (
			this.$refs.container.children.length ===
				this.$store.state.movies.movieListLen &&
			this.$store.state.movies.movieListLen !== 0
		) {
			this.io.disconnect()
			this.io.observe(
				this.$refs.container.children[
					this.$store.state.movies.movieListLen - 1
				],
			)
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 0.8rem;
	padding: 0;
	margin: 0 15px 0 15px;
	position: relative;
	top: 70px;

	article {
		width: 300px;
		margin: 10px;
		background-color: rgb(255, 255, 255);
		box-shadow: 0 2.5px 10px 2px rgba(black, 0.8);
		border-radius: 10px;

		&:hover {
			transform: scale(1.1);
			z-index: 1;
		}

		.moviePoster {
			position: relative;

			.poster::before {
				content: attr(data-runtime);
				position: absolute;
				background-color: rgba(black, 0.85);
				right: 7px;
				bottom: 12px;
				color: white;
				padding: 1px 2.5px;
				border-radius: 5px;
				font-size: 14px;
			}
		}

		.movieInfo {
			padding: 0 1rem 0 1rem;
		}
	}

	.movieInfo {
		h3 {
			margin: {
				top: 0px;
				bottom: 0px;
			}
		}

		p {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			word-wrap: break-word;
			line-height: 1.2em;
			height: 3.6em;
		}

		.rating {
			float: right;
		}
	}
}
</style>
