import { createApp } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import HighchartsMore from 'highcharts/highcharts-more';
import axios from 'axios';
import emitter from 'tiny-emitter/instance';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

import App from '@/App.vue';
import router from '@/router';
import store from '@/stores';
import '@/assets/styles/app.css';

import {
  faTimes, faPlus, faPencilAlt, faSortDown, faSortUp, faSort, faTrash, faUser, faUserCircle, faHome, faCheckCircle, faTimesCircle, faFileDownload, faCheck,
} from '@fortawesome/free-solid-svg-icons';

library.add([
  faTimes, faPlus, faPencilAlt,
  faCheck,
  faSort, faSortUp, faSortDown,
  faTrash,
  faUser, faUserCircle,
  faHome,
  faCheckCircle, faTimesCircle,
  faFileDownload,
]);

const app = createApp(App);
const isDev = import.meta.env.DEV;

// Register all the Vue components
const components = import.meta.glob('./components/**/*.vue', { eager: true });
Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '');
  app.component(componentName, definition.default);
});


HighchartsMore(Highcharts);
app.use(HighchartsVue, { Highcharts });
app.component('Fa', FontAwesomeIcon);
app.component('FA', FontAwesomeIcon);
app.component('fa', FontAwesomeIcon);
app.component('FaLayers', FontAwesomeLayers);

axios.defaults.baseURL = import.meta.env.VITE_API_URL +'api/';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.Authorization = 'Bearer ' + token;
}

app.config.globalProperties.$eventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
};

app.use(router)
  .use(store)
  .mount('#app');
