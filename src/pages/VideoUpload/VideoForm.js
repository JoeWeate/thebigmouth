import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CostumizableButton from "../../components/CostumizableButton.js";
import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
  },
});

const VideoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
    youtubeUrl: false,
    message: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const requiredFields = ["title", "description", "youtubeUrl"];
    const newFormErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newFormErrors[field] = true;
        isValid = false;
      } else {
        newFormErrors[field] = false;
      }
    });

    setFormErrors(newFormErrors);

    if (isValid) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          width: {
            lg: "60vh",
          },
          height: {
            lg: "50vh",
          },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "2rem",
          // border: `1px solid ${grey[300]}`,
          paddingBottom: "3rem",
        }}
      >
        <TextField
          fullWidth
          placeholder="Title"
          label="Title"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
          error={formErrors.title}
          helperText={formErrors.title && "Title is required"}
        />

        <TextField
          fullWidth
          placeholder="Youtube Url"
          label="URL"
          id="youtubeUrl"
          name="youtubeUrl"
          value={formData.youtubeUrl}
          onChange={handleChange}
          margin="normal"
          required
          error={formErrors.youtubeUrl}
          helperText={formErrors.youtubeUrl && "Youtube URL is required"}
        />
        <TextField
          fullWidth
          placeholder="Add a video description"
          label="Add a description"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          required
          error={formErrors.description}
          helperText={formErrors.description && "Description is required"}
        />
        <TextField
          fullWidth
          placeholder="Leave a message"
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
          defaultValue="Default Value"
        />
        <CostumizableButton
          variant="outlined"
          onClick={handleSubmit}
          size="large"
          sx={{ marginTop: "2rem" }}
          action={{ cursor: "pointer" }}
        >
          Submit
        </CostumizableButton>
      </Box>
    </ThemeProvider>
  );
};

export default VideoForm;