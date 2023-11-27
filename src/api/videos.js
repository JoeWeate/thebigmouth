import configureAxios from "./configureAxios";

const api = configureAxios({});

export const videos = async (formData) => {
  try {
    const response = await api.post("/videos", formData, {});
    return response.data;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
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
