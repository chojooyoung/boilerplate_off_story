<template>
	<div class="container">
		<div class="wrapper">
			<table>
				<tr>
					<th>Movie</th>
					<th>Quantity</th>
					<th>Subtotal</th>
				</tr>
				<!-- Dummy Data Start -->
				<tr>
					<td>
						<div class="cart-info">
							<div class="poster-container">
								<img src="https://source.unsplash.com/random" alt="" />
							</div>
							<div>
								<p>Printed T-shirt</p>
								<small>Price: 10,000원</small>
								<br />
								<button>Remove</button>
							</div>
						</div>
					</td>
					<td>
						<input type="number" value="1" />
					</td>
					<td>10,000원</td>
				</tr>
				<tr>
					<td>
						<div class="cart-info">
							<div class="poster-container">
								<img src="https://source.unsplash.com/random" alt="" />
							</div>
							<div>
								<p>Printed T-shirt</p>
								<small>Price: 20,000원</small>
								<br />
								<button>Remove</button>
							</div>
						</div>
					</td>
					<td>
						<input type="number" value="1" />
					</td>
					<td>20,000원</td>
				</tr>
				<tr>
					<td>
						<div class="cart-info">
							<div class="poster-container">
								<img src="https://source.unsplash.com/random" alt="" />
							</div>
							<div>
								<p>Printed T-shirt</p>
								<small>Price: 30,000원</small>
								<br />
								<button>Remove</button>
							</div>
						</div>
					</td>
					<td>
						<input type="number" value="1" />
					</td>
					<td>30,000원</td>
				</tr>
			</table>
			<!-- DummyData End -->
			<div class="total-price">
				<table>
					<tr>
						<td>제품비</td>
						<td>90,000원</td>
					</tr>
					<tr>
						<td>배달비</td>
						<td>3,000원</td>
					</tr>
					<tr>
						<td>총합계</td>
						<td>93,000원</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	position: relative;
	margin: 70px 10vw;

	.wrapper {
		/* width: 70vw; */
		table {
			width: 100%;
			border-collapse: collapse;
		}

		th {
			text-align: left;
			padding: 5px;
			color: #fff;
			background: #818181;
			font-weight: normal;

			&:last-child {
				text-align: right;
			}
		}

		td {
			padding: 10px 5px;
			text-align: left;

			input {
				width: 40px;
				height: 30px;
				padding: 5px;
			}

			&:last-child {
				text-align: right;
			}
		}

		.cart-info {
			display: flex;
			flex: wrap;

			.poster-container {
				width: 220px;
				height: 300px;
				margin-right: 10px;
				img {
					width: inherit;
					height: inherit;
					object-fit: cover;
				}
			}

			button {
				background-color: transparent;
				border: none;
				padding: 0;
				color: #fd0000;
			}
		}

		.total-price {
			display: flex;
			justify-content: flex-end;
		}

		.total-price table {
			border-top: 3px solid #818181;
			width: 100%;
			max-width: 400px;
		}
	}
}
</style>
