import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/CustomFonts.css";
import "./assets/font/nerd-fonts-generated.css";
import './assets/tailwind.css'


createApp(App).use(router).use(router).mount('#app')