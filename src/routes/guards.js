import store from '~/store'
import router from './index'

router.beforeEach(to => {
	if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
		return {
			path: '/login',
			query: { redirect: to.fullPath },
		}
	}
})
