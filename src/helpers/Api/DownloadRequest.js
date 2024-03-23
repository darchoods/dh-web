import axios from 'axios';
import store from '@/stores';
import DebugFlag from '@/helpers/DebugFlag';

export default (endPoint, formData, successCB, failureCB, contentType = 'application/octet-stream') => {
  if (DebugFlag('ajax')) {
    console.log('[API_SERVICE][DOWNLOAD] loading ', endPoint, formData);
  }
  store.dispatch('app/setLoading', true);
  axios
    .post(endPoint, formData, {
      headers: { 'Content-Type': contentType },
      responseType: 'blob',
    })
    .then((response) => {
      if (DebugFlag('ajax')) {
        console.log('[API_SERVICE][DOWNLOAD] success ', endPoint, response.data);
      }
      successCB(response);
    })
    .catch((error) => {
      if (DebugFlag('ajax')) {
        console.log('[API_SERVICE][DOWNLOAD] failure ', endPoint, error);
      }
      failureCB(error);
    })
    .finally(() => {
      store.dispatch('app/setLoading', false);
    });
};
