import configureAxios from '../configureAxios'

const api = configureAxios({});

export const getMultimedia = (name = 'Joey') => {
    return api.get(`/multimedia`, {
    }).then((data) => {
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}

