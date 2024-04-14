import PostRequest from '@/helpers/Api/PostRequest';

export default {
  qdbRandom: (data, successCB, failureCB) => {
    var formData = new FormData();
    formData.append('number', data.number);
    PostRequest('qdb/random', formData, successCB, failureCB);
  },
  qdbByChannel: (data, successCB, failureCB) => {
    var formData = new FormData();
    formData.append('channel', data.channel);
    formData.append('number', data.number);
    formData.append('page', data.page);
    PostRequest('qdb/byChannel', formData, successCB, failureCB);
  },
  qdbChanlist: (successCB, failureCB) => {
    PostRequest('qdb/channels', {}, successCB, failureCB);
  },
};
