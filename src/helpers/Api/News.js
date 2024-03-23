import PostRequest from '@/helpers/Api/PostRequest';

export default {
  getNews: (successCB, failureCB) => {
    PostRequest('api/news/all', {}, successCB, failureCB);
  },
  getNewsById: (data, successCB, failureCB) => {
    PostRequest('api/news/' + data.id, {}, successCB, failureCB);
  },
};
