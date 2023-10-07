import configureAxios from '../configureAxios'

const api = configureAxios({});


export const getHelloWorld = (name = 'World') => {
    return api.get(`/world/${name}`, {
    }).then((data) => {
        console.log(data.data)
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
  }


export const getLoggedInHelloWorld = () => {
    return api.get(`/world/secure}`, {
    }).then((data) => {
        console.log(data.data)
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
  }