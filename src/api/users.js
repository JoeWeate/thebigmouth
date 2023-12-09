import configureAxios from "./configureAxios";

const api = configureAxios({});

export const registerNewUser = ({ UserID, Email, Name, Role = "User" }) => {
  return api
    .post(`/users`, { UserID, Email, Name, Role })
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

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

export const getUsers = () => {
  return api
    .get(`/users`, {})
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
