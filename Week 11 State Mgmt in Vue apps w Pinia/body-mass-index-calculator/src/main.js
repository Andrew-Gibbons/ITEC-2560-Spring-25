// Import createApp and createPinia
// Import App.vue
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// Create the app and Pinia instance
const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // Register Pinia with the app
app.mount('#app'); // Mount the app
