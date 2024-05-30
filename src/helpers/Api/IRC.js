import PostRequest from '@/helpers/Api/PostRequest';

export default {
  getChannels: (successCB, failureCB) => {
    PostRequest('irc/channels/all', {}, successCB, failureCB);
  },
};
