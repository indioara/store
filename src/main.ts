import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.scss"
import components from "@/components/UI/index"
import VueAwesomeSwiper from 'vue-awesome-swiper'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).use(router).use(VueAwesomeSwiper).mount('#app')


