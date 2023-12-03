import configureAxios from "./configureAxios";
import { VIDEO_DATA_KEYS } from "../utils/constants";
const api = configureAxios({});

export const uploadVideo = async (data) => {
  try {
    const response = await api.post("/videos", data);
    return response.data;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw new Error("Failed to upload video. Please try again later.");
  }
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
export const getAllVideoByUserID = (UserID) => {
  return api
    .get(`/videos/${UserID}`)
    .then((data) => {
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};


export const updateVideo = async ({ data }) => {
  console.log("data API", data)
  //need to creating an array with a dummy value "message" to make lambda put working
  const newData = {
    ...data, Messages: ["message"]
  }
  try {
    const response = await api.put(`videos/${data.UserID}/${data.VideoID}`, newData);
    return response.data;
  } catch (error) {
    console.error("Error update the video:", error);
    throw new Error("Failed to update the video.");
  }
}

export const apiUpdateVideo = (updatedVideo, handleSnackbar) => {
  const videoId = updatedVideo[VIDEO_DATA_KEYS.VIDEO_ID];
  const userId = updatedVideo[VIDEO_DATA_KEYS.USER_ID];
  return api
    .put(`/videos/${userId}/${videoId}`, updatedVideo)
    .then((data) => {
      if (handleSnackbar && typeof handleSnackbar === 'function') handleSnackbar("success")
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log("putUpdatedVideo", { error });
      if (handleSnackbar && typeof handleSnackbar === 'function') handleSnackbar("error")
    });
};

export const apiDeleteVideo = (userId, videoId, successCallback, failureCallback) => {
  return api
    .delete(`/videos/${userId}/${videoId}`)
    .then((data) => {
      if (successCallback && typeof successCallback === 'function') successCallback()
      return Promise.resolve(data);
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === 'function') failureCallback();
      console.log(error);
    });
};
