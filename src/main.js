import { createApp } from 'vue'
// import fetchPlugin from '~/plugins/fetch'
import router from '~/routes'
import '~/routes/guards'
import store from '~/store'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(fetchPlugin, {
//     pluginName: '$fetch'
// })
app.mount('#app')
