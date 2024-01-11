import Vue from 'vue';
import { h } from 'vue-demi';
import CHKSVue from 'chks-vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import HighchartsMore from 'highcharts/highcharts-more';
import axios from 'axios';
import vmodal from 'vue-js-modal';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import ToggleField from '@vueform/toggle/dist/toggle.vue2.js';

import App from '@/App.vue';
import router from '@/router';
import store from '@/stores';
import '@/assets/styles/app.css';
import '@/assets/styles/toggle.css';

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

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Register all the local Vue components
const components = import.meta.globEager('./components/**/*.vue');
Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '');
  Vue.component(componentName, definition.default);
});

Vue.use(CHKSVue);
HighchartsMore(Highcharts);
Vue.use(HighchartsVue, { Highcharts });
Vue.use(vmodal);

Vue.component('Fa', FontAwesomeIcon);
// Vue.component('ToggleField', ToggleField);

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.Authorization = 'Bearer ' + token;
}

Vue.prototype.$eventBus = new Vue();

const app = new Vue({
  router,
  store,
  render: () => h(App),
});
app.$mount('#app');
