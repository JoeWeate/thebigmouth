import React, { useState } from "react";
import {
  Box,
  TextField,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Button from "../../components/Button.js";
import { useAuth0 } from "@auth0/auth0-react";
import { uploadVideo } from "../../api/videos.js";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const isUrlValid = (url) => {
  const urlRegex =
    /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;

  return urlRegex.test(url);
};

const VideoForm = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [data, setData] = useState({
    title: "",
    shortDescription: "",
    videoLink: "",
    description: "",
    file: null,
    uploadType: "link", // Added uploadType to track user choice
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    shortDescription: false,
    videoLink: false,
    description: false,
  });

  const handleChange = (event) => {
    console.log("Event:", event);

    const { name, value, files } = event.target;
    if (name === "uploadType") {
      setData({
        ...data,
        uploadType: value,
        file: null,
        videoLink: "",
      });
    } else if (name === "file") {
      setData({
        ...data,
        file: files[0],
        videoLink: "",
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    if (data.uploadType === "link" && !isUrlValid(data.videoLink)) {
      setFormErrors({ ...formErrors, videoLink: true });
      return;
    }

    const requiredFields = ["title", "description"];
    if (data.uploadType === "link") {
      requiredFields.push("videoLink");
    } else {
      requiredFields.push("file");
    }

    const newFormErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!data[field]) {
        newFormErrors[field] = true;
        isValid = false;
      } else {
        newFormErrors[field] = false;
      }
    });

    setFormErrors(newFormErrors);

    if (isValid) {
      try {
        console.log("Form data:", data);
        await uploadVideo({ ...data, userId: user.sub });

        setData({
          title: "",
          shortDescription: "",
          videoLink: "",
          description: "",
          file: null,
          uploadType: "link",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
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
      <TextField
        fullWidth
        placeholder="Title"
        label="Title"
        id="title"
        name="title"
        value={data.title}
        onChange={handleChange}
        margin="normal"
        required
        error={formErrors.title}
        helperText={formErrors.title && "Title is required"}
        InputLabelProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.root,
          },
        }}
        InputProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.input,
            backgroundColor: "#5D5D5D",
          },
        }}
      />
      <TextField
        fullWidth
        placeholder="Add a short video description"
        label="Short Description"
        id="shortDescription"
        name="shortDescription"
        value={data.shortDescription}
        onChange={handleChange}
        margin="normal"
        required
        error={formErrors.description}
        helperText={formErrors.description && "Description is required"}
        InputLabelProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.root,
          },
        }}
        InputProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.input,
            backgroundColor: "#5D5D5D",
          },
        }}
      />
      <TextField
        fullWidth
        placeholder="Add a detailed video description"
        label="Long Description"
        id="description"
        name="description"
        value={data.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
        defaultValue="Default Value"
        InputLabelProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.root,
          },
        }}
        InputProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.input,
            backgroundColor: "#5D5D5D",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputLabel
          id="uploadTypeLabel"
          sx={{ color: "white", padding: "0.5rem" }}
        >
          Choose how you want to upload your video :
        </InputLabel>
        <Select
          labelId="uploadTypeLabel"
          id="uploadType"
          value={data.uploadType}
          onChange={handleChange}
          label="Upload Type"
        >
          <MenuItem value="link">Video Link</MenuItem>
          <MenuItem value="file">File Upload</MenuItem>
        </Select>
      </Box>
      {data.uploadType === "file" ? (
        <Box
          sx={{
            position: "relative",
            display: data.uploadType === "file" ? "block" : "none",
          }}
        >
          <input
            accept="video/*"
            type="file"
            onChange={(event) =>
              handleChange({
                target: { name: "file", files: [event.target.files[0]] },
              })
            }
            name="file"
            style={{
              display: "block",
              opacity: 1,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            id="fileInput"
          />
          <label htmlFor="fileInput">
            <Button
              component="span"
              template="pink"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              Upload
            </Button>
          </label>
        </Box>
      ) : (
        <TextField
          fullWidth
          placeholder="Add your YouTube or Vimeo URL"
          label="Link"
          id="VideoLink"
          name="videoLink"
          value={data.videoLink}
          onChange={handleChange}
          margin="normal"
          required
          error={formErrors.videoLink}
          helperText={
            formErrors.videoLink && "Provide a valid YouTube or Vimeo url."
          }
          InputLabelProps={{
            style: {
              ...theme.overrides.MuiOutlinedInput.root,
            },
          }}
          InputProps={{
            style: {
              ...theme.overrides.MuiOutlinedInput.input,
              backgroundColor: "rgba(235, 3, 143, 0.6)",
              borderColor: formErrors.videoLink
                ? "#EB038F"
                : theme.overrides.MuiOutlinedInput.input.borderColor,
              display: data.uploadType === "file" ? "none" : "block",
            },
          }}
        />
      )}
      <Button template="yellow" variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default VideoForm;
