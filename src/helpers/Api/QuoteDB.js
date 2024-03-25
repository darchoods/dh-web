import PostRequest from '@/helpers/Api/PostRequest';

export default {
  qdbRandom: (data, successCB, failureCB) => {
    var formData = new FormData();
    formData.append('number', data.number);
    PostRequest('api/qdb/random', formData, successCB, failureCB);
  },
  qdbChanlist: (successCB, failureCB) => {
    PostRequest('api/qdb/channels', {}, successCB, failureCB);
  },
};
