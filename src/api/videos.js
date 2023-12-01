import configureAxios from "./configureAxios";

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

export const apiDeleteVideo = (userId, videoId, successCallback, failureCallback) => {
  return api
      .delete(`/videos/${userId}/${videoId}`)
      .then((data) => {
        if(successCallback && typeof successCallback === 'function')successCallback()
        return Promise.resolve(data);
      })
      .catch((error) => {
        if(failureCallback && typeof failureCallback === 'function')failureCallback();
        console.log(error);
      });
};
