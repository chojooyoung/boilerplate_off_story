import { createRouter, createWebHistory } from 'vue-router'
import Cart from './Cart'
import LogIn from './LogIn'
import MovieList from './MovieList'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: MovieList,
		},
		{
			path: '/cart',
			component: Cart,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/login',
			component: LogIn,
		},
	],
})
