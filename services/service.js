const axios = require('axios');
const queryString = require('query-string');

const clientService = axios.create({
  baseURL: 'http://nodejs-backend3.us-east-2.elasticbeanstalk.com',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

// Customize Requests Respones
clientService.interceptors.request.use(async config => config);
clientService.interceptors.response.use(async response => {
  if (response && response.data) return response.data;
  return response;
});

module.exports = clientService;
