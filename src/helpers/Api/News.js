import PostRequest from '@/helpers/Api/PostRequest';

export default {
  getNews: (successCB, failureCB) => {
    PostRequest('news/all', {}, successCB, failureCB);
  },
  getNewsById: (data, successCB, failureCB) => {
    PostRequest('news/' + data.id, {}, successCB, failureCB);
  },
};
