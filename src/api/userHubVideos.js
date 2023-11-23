import configureAxios from "./configureAxios";
const api = configureAxios({});
export const getVideos = () => {
  return api
    .get(`/videos`, {})
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getOneVideo = (userId) => {
  return api
    .get(`/videos/${userId}`)
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
