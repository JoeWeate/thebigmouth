import configureAxios from '../configureAxios'

const api = configureAxios({});

export const getHelloWorld = (name = 'Joey') => {
    return api.get(`/world`, {
    }).then((data) => {
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
  }

  export const getHelloWorldByName = (name = '') => {
    return api.get(`/world/${name}`, {
    }).then((data) => {
        console.log({data})
        return Promise.resolve(data.data);
    }).catch((error) => {
        return Promise.resolve('Please make sure you are logged in');
    });
  }