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

export const updateVideo = async ({ userId, videoId, formData }) => {
  try {
    const response = await api.put(`/videos/${userId}/${videoId}`, formData, {});
    return response.data;
  } catch (error) {
    console.error("Error update the video:", error);
    throw error;
  }
};
