import configureAxios from '../configureAxios'

const api = configureAxios({});

export const getMultimedia = () => {
    return api.get(`/multimedia`, {
    }).then((data) => {
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
        // return Promise.reject(error);
    });
}

export const getOneMultimedia = (id) => {
    console.log('API Call Started');
    return api.get(`/multimedia/${id}`)
      .then((data) => {
        console.log('API Call Successful');
        return Promise.resolve(data.data);
      })
      .catch((error) => {
        console.log('API Call Failed:', error);
        // return Promise.reject(error);
      });
  }
  