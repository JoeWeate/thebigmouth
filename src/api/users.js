import configureAxios from "./configureAxios";

const api = configureAxios({});

export const getUserById = (userID) => {
  return api
    .get(`/users/${userID}`, {})
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
