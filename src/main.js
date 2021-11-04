import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import VtuberList from './components/pages/VtuberList.vue';
import PadkoPage from './components/pages/PadkoPage.vue';
import No15Page from './components/pages/No15Page.vue';
import LutraLutraPage from './components/pages/LutraLutraPage.vue';
import ObearPage from './components/pages/ObearPage.vue';
import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/vtuberList' },
    { path: '/vtuberList', component: VtuberList },
    { path: '/padko', component: PadkoPage },
    { path: '/no15', component: No15Page },
    { path: '/lutralutra', component: LutraLutraPage },
    { path: '/obear', component: ObearPage },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active' //將router-link-active重新命名
});

const app = createApp(App);

app.use(router);

app.mount('#app');
