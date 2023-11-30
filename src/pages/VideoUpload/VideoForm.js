import React, { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import Button from "../../components/Button.js";
import { useAuth0 } from "@auth0/auth0-react";
import { uploadVideo } from "../../api/videos.js";

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
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    shortDescription: false,
    videoLink: false,
    description: false,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("Submitting form:", data);

    if (!isUrlValid(data.videoLink)) {
      console.error("Invalid URL");
      setFormErrors({ ...formErrors, videoLink: true });
      return;
    }
    const requiredFields = ["title", "description", "videoLink"];
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
      <Button template="yellow" variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default VideoForm;
