export default {
	namespaced: true,
	state() {
		return {
			movieName: '',
			movieListLen: 0,
			movieList: [],
			page: 1,
			totalResults: '',
			loadings: [],
		}
	},
	getters: {
		loading(state) {
			return state.loadings.some(loading => loading)
		},
	},
	mutations: {
		initializeMovieInfo(state, movieName) {
			state.movieList = []
			state.movieListLen = 0
			state.page = 1
			state.movieName = movieName
		},
		changeMovieInfo(state, { newPage, newTotalResults, newMovieListLen }) {
			state.page = newPage || state.page
			state.totalResults = newTotalResults || state.totalResults
			state.movieListLen += newMovieListLen || 0
		},
		startLoading(state) {
			state.loadings.push(true)
		},
		endLoading(state) {
			state.loadings.splice(0, 1)
		},
	},
	actions: {
		async initialFetchMovies({ state, commit, dispatch }, movieName) {
			commit('initializeMovieInfo', movieName)

			const movies = await dispatch('_request', {
				method: 'GET',
				movieName: state.movieName,
				page: state.page,
			})

			commit('changeMovieInfo', {
				newTotalResults: movies.totalResults,
				newMovieListLen: movies.Search.length,
			})

			movies.Search.forEach(async movie => {
				state.movieList.push(
					await dispatch('fetchMovieDescription', movie.imdbID),
				)
			})
		},
		async fetchMovies({ state, commit, dispatch }) {
			commit('changeMovieInfo', { newPage: state.page + 1 })
			const movies = await dispatch('_request', {
				method: 'GET',
				movieName: state.movieName,
				page: state.page,
			})

			commit('changeMovieInfo', { newMovieListLen: movies.Search.length })

			movies.Search.forEach(async movie => {
				state.movieList.push(
					await dispatch('fetchMovieDescription', movie.imdbID),
				)
			})
		},
		async fetchMovieDescription({ dispatch }, movieId) {
			return await dispatch('_request', {
				movieId,
				plot: 'full',
			})
		},
		async _request({ state, commit }, options) {
			commit('startLoading')
			console.log(state.loadings)
			return await fetch('/.netlify/functions/workspace', {
				method: 'POST',
				body: JSON.stringify(options),
			})
				.then(res => res.json())
				.finally(() => {
					commit('endLoading')
				})
		},
	},
}
