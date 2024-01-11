import axios from 'axios';
import store from '@/stores';
import DebugFlag from '@/helpers/DebugFlag';

export default (endPoint, formData, successCB, failureCB, contentType = 'application/x-www-form-urlencoded') => {
  if (DebugFlag('ajax')) {
    console.log('[CORE_SERVICE][POST] loading ', endPoint, formData);
  }
  store.dispatch('app/setLoading', true);
  axios
    .post(endPoint, formData, {
      headers: { 'Content-Type': contentType },
    })
    .then((response) => {
      if (DebugFlag('ajax')) {
        console.log('[CORE_SERVICE][POST] success ', endPoint, response.data);
      }
      successCB(response);
    })
    .catch((error) => {
      if (DebugFlag('ajax')) {
        console.log('[CORE_SERVICE][POST] failure ', endPoint, error);
      }
      failureCB(error);
    })
    .finally(() => {
      store.dispatch('app/setLoading', false);
    });
};
