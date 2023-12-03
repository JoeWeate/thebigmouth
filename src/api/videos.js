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

export const updateVideo = async ({ data }) => {
  console.log("data API", data)
  const newData = { ...data, Messages: ["message"] }
  try {
    const response = await api.put(`videos/${data.UserID}/${data.VideoID}`, newData);
    return response.data;
  } catch (error) {
    console.error("Error update the video:", error);
    throw new Error("Failed to update the video.");
  }
};
