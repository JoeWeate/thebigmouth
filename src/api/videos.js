import configureAxios from "./configureAxios";
import { VIDEO_DATA_KEYS } from "../utils/constants";
const api = configureAxios({});

export const UploadFileData = async (file, data, UserID, UserName) => {
  try {
    const response = await api.put("/presigned-url", {}); //changed to put as we are going to use to put objects

    if (response.status !== 200) {
      throw new Error("Failed to get presigned URL.");
    }
    //get presigned url and s3 from response of the get request
    const { fileUploadURL, s3Link } = response.data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "video/mp4" },
      body: file,
    };
    //do the put request
    const uploadResponse = await fetch(fileUploadURL, requestOptions);

    if (!uploadResponse.ok) {
      throw new Error(
        "File upload failed. Check the presigned URL or try again."
      );
    }
    console.log(uploadResponse, "uploadResponse");
    //get the key of the uploaded file and send it to database
    console.log(s3Link, "s3Link");

    const { URL, ...restData } = data;

    await UploadUrlData({
      ...restData,
      URL: s3Link,
      UserID,
      UserName,
    });
  } catch (error) {
    console.error("An error occurred during file upload:", error);
  }
};

export const UploadUrlData = async (data) => {
  try {
    await api.post("/videos", data);
  } catch (error) {
    console.error("Error while updating server with metadata:", error);
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

export const apiUpdateVideo = (updatedVideo, handleSnackbar) => {
  const videoId = updatedVideo[VIDEO_DATA_KEYS.VIDEO_ID];
  const userId = updatedVideo[VIDEO_DATA_KEYS.USER_ID];
  return api
    .put(`/videos/${userId}/${videoId}`, updatedVideo)
    .then((data) => {
      if (handleSnackbar && typeof handleSnackbar === "function")
        handleSnackbar("success");
      return Promise.resolve(data.data);
    })
    .catch((error) => {
      console.log("putUpdatedVideo", { error });
      if (handleSnackbar && typeof handleSnackbar === "function")
        handleSnackbar("error");
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
      if (successCallback && typeof successCallback === "function")
        successCallback();
      return Promise.resolve(data);
    })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};
