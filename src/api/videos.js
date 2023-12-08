import configureAxios from "./configureAxios";
import { VIDEO_DATA_KEYS } from "../utils/constants";
const api = configureAxios({});

export const uploadVideo = async (data, successCallback, failureCallback) => {
  return api
    .post("/videos", data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .then(() => {
      if (successCallback && typeof successCallback === "function")
        successCallback();
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};

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
export const getAllVideoByUserID = (
  UserID,
  successCallback,
  failureCallback
) => {
  return api
    .get(`/videos/${UserID}`)
    .then((data) => {
      if (successCallback && typeof successCallback === "function")
        successCallback();
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};

export const getAllVideosByState = (
  state,
  successCallback,
  failureCallback
) => {
  return api
    .get(`/videos/state/${state}`)
    .then((data) => {
      if (successCallback && typeof successCallback === "function")
        successCallback();
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};
export const apiUpdateVideo = (
  updatedVideo,
  successCallback,
  failureCallback
) => {
  const videoId = updatedVideo[VIDEO_DATA_KEYS.VIDEO_ID];
  const userId = updatedVideo[VIDEO_DATA_KEYS.USER_ID];
  return api
    .put(`/videos/${userId}/${videoId}`, updatedVideo)
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .then(() => {
      if (successCallback && typeof successCallback === "function")
        successCallback();
    })
    .catch((error) => {
      console.log("putUpdatedVideo", { error });
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
    });
};
export const apiDeleteVideo = (
  userId,
  videoId,
  successCallback,
  failureCallback
) => {
  return api
    .delete(`/videos/${userId}/${videoId}`)
    .then((data) => {
      return Promise.resolve(data);
    })
    .then(() => {
      if (successCallback && typeof successCallback === "function")
        successCallback();
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};
