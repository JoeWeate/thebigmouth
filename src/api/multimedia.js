import configureAxios from './configureAxios'

const api = configureAxios({});

export const getMultimedia = () => {
    return api.get(`/multimedia`, {
    }).then((data) => {
        return Promise.resolve(data.data);
    }).catch((error) => {
        console.log(error);
    });
}

export const getOneMultimedia = (id) => {
    return api.get(`/multimedia/${id}`)
      .then((data) => {
        return Promise.resolve(data.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }
