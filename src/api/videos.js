import configureAxios from "./configureAxios";
import { VIDEO_DATA_KEYS } from "../utils/constants";
const api = configureAxios({});

export const UploadFileData = async (file, userId, data, setData) => {
  try {
    const response = await api.get("/presigned-url", {});

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

    const { videoLink, ...restData } = data;

    await UploadUrlData({
      ...restData,
      videoLink: s3Link,
      userId: userId,
      source: "Internal",
    });
  } catch (error) {
    console.error("An error occurred during file upload:", error);
  }
};

export const UploadUrlData = async (data, successCallback, failureCallback) => {
  return api
      .post("/videos", data)
      .then((response) => {
        return Promise.resolve(response.data);
      }).then(() => {
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
export const getAllVideoByUserID = (UserID, successCallback, failureCallback) => {
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

export const getAllVideosByState = (state, successCallback, failureCallback) => {
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
export const apiUpdateVideo = (updatedVideo, successCallback, failureCallback) => {
  const videoId = updatedVideo[VIDEO_DATA_KEYS.VIDEO_ID];
  const userId = updatedVideo[VIDEO_DATA_KEYS.USER_ID];
  return api
    .put(`/videos/${userId}/${videoId}`, updatedVideo)
    .then((data) => {
      return Promise.resolve(data.data);
    }).then(() => {
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
    }).then(() => {
        if (successCallback && typeof successCallback === "function")
          successCallback();
      })
    .catch((error) => {
      if (failureCallback && typeof failureCallback === "function")
        failureCallback();
      console.log(error);
    });
};
