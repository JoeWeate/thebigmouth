import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "../../components/Button";
// import { useAuth0 } from "@auth0/auth0-react";
import { VideoUpload } from "../../api/videos"; // Adjust the import path based on your actual file structure

const VideoForm = () => {
  // const { user } = useAuth0();
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await VideoUpload(file);
      console.log("File uploaded successfully!", response);
    } catch (error) {
      console.error("Error handling file upload:", error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: {
          maxWidth: "700px",
        },
        height: {
          maxHeight: "500px",
        },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <input
          accept="video/*"
          type="file"
          onChange={handleChange}
          style={{
            display: "block",
            opacity: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
          id="fileInput"
        />
      </Box>

      <Button template="yellow" variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
export default VideoForm;
