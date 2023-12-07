import configureAxios from "./configureAxios";

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
