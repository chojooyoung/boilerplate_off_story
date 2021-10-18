<template>
	<div class="container">
		<div class="wrapper">
			<div class="header">
				<h2>Login</h2>
			</div>
			<form @submit.prevent>
				<div
					class="form-control"
					:class="[userID.length >= 1 ? 'success' : 'error']"
				>
					<label>Username</label>
					<input
						v-model="userID"
						placeholder="아이디를 입력하세요"
						type="text"
					/>
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
				</div>

				<div
					class="form-control"
					:class="[userPW.length >= 1 ? 'success' : 'error']"
				>
					<label>Password</label>
					<input
						v-model="userPW"
						placeholder="비밀번호를 입력하세요"
						type="password"
					/>
					<i class="fas fa-check-circle"></i>
					<i class="fas fa-exclamation-circle"></i>
				</div>

				<button @click="logIn">Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userID: '',
			userPW: '',
		}
	},
	methods: {
		logIn() {
			if (this.userID.length !== 0 && this.userPW.length !== 0) {
				this.$store.dispatch('user/logIn', {
					id: this.userID,
					pw: this.userPW,
				})
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	position: relative;
	background-color: rgba(43, 43, 43, 0.8);
	.wrapper {
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(black, 0.3);
		width: 400px;

		.header {
			background-color: #f7f7f7;
			border-bottom: 5px solid #f0f0f0;
			padding: 20px 40px;
		}

		form {
			padding: 30px 40px;

			.form-control {
				position: relative;
				margin-bottom: 10px;
				padding-bottom: 20px;

				i {
					position: absolute;
					top: 40px;
					right: 10px;
					visibility: hidden;
				}

				label {
					display: inline-block;
					margin-bottom: 5px;
				}

				input {
					display: block;
					border: 2px solid #f0f0f0;
					border-radius: 4px;
					font-size: 14px;
					box-sizing: border-box;
					padding: 10px;
					width: 100%;
				}
				&.success input {
					border-color: #2ecc71;
				}
				&.success i.fa-check-circle {
					color: #2ecc71;
					visibility: visible;
				}
				&.error input {
					border-color: #e74c3c;
				}
				&.error i.fa-exclamation-circle {
					color: #e74c3c;
					visibility: visible;
				}
			}

			button {
				background-color: #242421;
				border: 2px solid #242421;
				color: #fff;
				font-family: inherit;
				font-size: 16px;
				padding: 10px;
				width: 100%;
			}
		}
	}
}
</style>
