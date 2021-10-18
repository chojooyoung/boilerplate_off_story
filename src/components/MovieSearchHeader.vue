<template>
	<header>
		<div class="header__left">
			<h3 @click="$router.push('/')">MovieFinder</h3>
		</div>
		<div class="header__middle">
			<form @submit.prevent="">
				<input
					placeholder="영화 제목을 입력해 주세요"
					:value="modelValue"
					@keyup.enter="$emit('update:modelValue', $event.target.value)"
				/>
				<button>
					<i class="material-icons"> search </i>
				</button>
			</form>
		</div>
		<div class="header__right">
			<button @click="$router.push('/cart')">
				<i class="material-icons"> shopping_cart </i>
			</button>
			<button>
				<i class="material-icons"> settings </i>
			</button>
			<button>
				<i class="material-icons"> notifications_active </i>
			</button>
			<button v-if="!isLoggedIn" @click="$router.push('/login')">
				<i class="material-icons"> login </i>
			</button>
			<button v-else @click="logOut">
				<i class="material-icons"> logout </i>
			</button>
		</div>
	</header>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},
	emits: ['update:modelValue'],
	computed: {
		...mapState('user', ['isLoggedIn']),
	},
	methods: {
		...mapActions('user', ['logOut']),
	},
}
</script>

<style lang="scss" scoped>
header {
	top: 0;
	position: fixed;
	z-index: 2;
	height: 70px;
	width: 100%;
	background-color: rgba(rgb(255, 255, 255), 0.95);
	display: flex;
	justify-content: space-between;
	align-items: center;

	.header__left {
		display: flex;
		margin-left: 10px;

		h3 {
			cursor: pointer;
		}
	}

	.header__middle {
		form {
			display: flex;
			align-items: center;
			height: 35px;
			border: 1px solid #ddd;

			input {
				width: 500px;
				padding: 10px;
				border: none;
			}

			button {
				display: flex;
				align-items: center;
				height: 100%;
				width: 40px;
				padding: 0;
				border: none;

				i {
					width: 100%;
					border: none;
				}
			}
		}
	}

	.header__right {
		display: flex;

		button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			margin-right: 5px;
			i {
				color: rgb(160, 160, 160);

				&:hover {
					color: rgb(41, 41, 41);
				}
			}
		}
	}
}
</style>
