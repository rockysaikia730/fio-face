import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import langvalue from './mixins/langvalue'

createApp(App).use(store).use(router).mixin(langvalue).mount('#app')
