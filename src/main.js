import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/cartStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faBars, faX, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartShopping, faBars, faX, faAngleDown)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)
app.mount('#app')
