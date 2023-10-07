import axios from 'axios';
import env_config from './../env_config'

const DOMAIN = env_config.apiGateway.URL
const PROTOCOL = `https`;
const PREFIX = ``;


function configureAxios(config) {
  axios.create({
    baseURL: `${PROTOCOL}://${DOMAIN}${PREFIX}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    },
    ...config,
  });

  axios.interceptors.request.use(
    (c) => {
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      c.baseURL = `${PROTOCOL}://${DOMAIN}${PREFIX}`;
      if (token) {
        c.headers.authorization = token;
      }
      return c;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    function (response) {
      if (response.data) {
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        return Promise.reject(response);
      }
      return Promise.reject(response);
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axios
}


export default configureAxios;