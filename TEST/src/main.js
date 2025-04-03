import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'






import App from './App.vue'
import router from './router'

// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

const app = createApp(App)

// firebase
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(createPinia())
app.use(router)

app.mount('#app')
