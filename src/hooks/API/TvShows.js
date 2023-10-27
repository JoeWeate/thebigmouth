import configureAxios from "../configureAxios";

const api = configureAxios({});

export const getTvShows = () => {
  return api
    .get(`/episodes`, {})
    .then((data) => {
      console.log({ data });
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      return Promise.resolve("Please make sure you are logged in");
    });
};
