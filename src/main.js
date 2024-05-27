import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import api from "@/service/api";
import VueTheMask from 'vue-the-mask';
import YoutubeVue3 from 'youtube-vue3';

const app = createApp(App);
app.use(api);
app.use(router);
app.use(YoutubeVue3);
app.use(VueTheMask);
app.mount('#app');
