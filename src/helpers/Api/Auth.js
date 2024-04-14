import PostRequest from '@/helpers/Api/PostRequest';

export default {
  login: (data, successCB, failureCB) => {
    var formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    PostRequest('auth/login', formData, successCB, failureCB);
  },
  getUser: (successCB, failureCB) => {
    PostRequest('auth/me', {}, successCB, failureCB);
  },
};
