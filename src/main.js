import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import api from "@/service/api";

const app = createApp(App)
app.use(api)
app.use(router)
app.mount('#app')
