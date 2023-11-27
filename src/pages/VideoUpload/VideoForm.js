import React, { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import Button from "../../components/Button.js";
import { useAuth0 } from "@auth0/auth0-react";
import { uploadVideo } from "../../api/videos.js";

const VideoForm = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [data, setData] = useState({
    title: "",
    description: "",
    videoLink: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
    videoLink: false,
    message: false,
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
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

        // Reset form data
        setData({
          title: "",
          description: "",
          videoLink: "",
          message: "",
        });
        console.log("Form data submitted:", data);
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
        placeholder="Video Link"
        label="Link"
        id="VideoLink"
        name="videoLink"
        value={data.videoLink}
        onChange={handleChange}
        margin="normal"
        required
        error={formErrors.videoLink}
        helperText={formErrors.videoLink && "Video Link is required"}
        InputLabelProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.root,
          },
        }}
        InputProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.input,
            backgroundColor: "rgba(235, 3, 143, 0.6)",
          },
        }}
      />
      <TextField
        fullWidth
        placeholder="Add a video description"
        label="Add a description"
        id="description"
        name="description"
        value={data.description}
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
        placeholder="Leave a message"
        label="Message"
        id="message"
        name="message"
        value={data.message}
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
