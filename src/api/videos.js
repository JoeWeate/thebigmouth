import configureAxios from "./configureAxios";
const api = configureAxios({});

export const VideoUpload = async (file) => {
  try {
    console.log("File type:", file.type);
    console.log("File size:", file.size);

    //get presigned url
    const response = await api.get("/presigned-url", {});

    if (response.status === 200) {
      const preSignedURL = response.data.fileUploadURL;

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "video/mp4" },
        body: file,
      };

      const uploadResponse = await fetch(preSignedURL, requestOptions);

      if (uploadResponse.status === 200) {
        return uploadResponse.data;
      } else {
        console.error("Unexpected status code:", uploadResponse.status);
        throw new Error(`Unexpected status code: ${uploadResponse.status}`);
      }
    } else {
      console.error("Unexpected status code:", response.status);
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error handling file upload:", error);
    throw error;
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
export const getAllVideoByUserID = async (UserID) => {
  try {
    const response = await api.get(`/videos/${UserID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
