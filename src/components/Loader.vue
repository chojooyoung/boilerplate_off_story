<template>
	<div v-show="loading" class="container">
		<div class="circle"></div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('movies', ['loading']),
	},
}
</script>

<style lang="scss" scoped>
.container {
	position: fixed;
	bottom: 50px;
	right: 50px;
	z-index: 3;

	.circle {
		height: 100px;
		width: 100px;
		border: 15px solid #c7c7c7;
		border-top-color: #2a88e6;
		border-radius: 50%;
		animation: spin 1.5s infinite linear;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
