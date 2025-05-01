// This imports createApp from Vue’s core package ('vue').
// Vue 3 uses createApp() to initialize applications, replacing the new Vue() approach used in Vue 2.
    // Import stylesheet for the application.
        // This imports the main application component (App.vue) from the current directory.
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// This creates a new Vue application instance using the App component as the root component.
// The createApp function is a part of Vue 3's API for creating applications.
createApp(App).mount('#app')
