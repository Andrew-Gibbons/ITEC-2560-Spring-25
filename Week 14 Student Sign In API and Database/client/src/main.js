// Import vue, pinia, styles, bootstrap, and app.vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'

// Create the app and pinia instance
const app = createApp(App)
const pinia = createPinia()

// Register pinia with the app
app.use(pinia)

// Mount the app
app.mount('#app')
