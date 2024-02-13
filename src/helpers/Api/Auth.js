import PostRequest from '@/helpers/Api/PostRequest';

export default {
  login: (data, successCB, failureCB) => {
    var formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    PostRequest('login', formData, successCB, failureCB);
  },
  register(data, successCB, failureCB) {
    var formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('full_name', data.full_name);
    PostRequest('register', formData, successCB, failureCB);
  },
};
