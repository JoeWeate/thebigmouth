import React, { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import Button from "../../components/Button.js";
import { useAuth0 } from "@auth0/auth0-react";
import { uploadVideo, updateVideo } from "../../api/videos.js";



const isUrlValid = (url) => {
  const urlRegex =
    /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;

  return urlRegex.test(url);
};


const VideoForm = ({ initialData, setOpenEdit }) => {
  console.log("initialData", initialData)
  const { user } = useAuth0();
  const theme = useTheme();

  const [data, setData] = useState(initialData || {});

  const [formErrors, setFormErrors] = useState({
    Title: false,
    ShortDescription: false,
    URL: false,
    Description: false,
  });



  const handleChange = (key) => (event) => {
    setData({
      ...data,
      [key]: event.target.value,
    });
  };

  // const handleEdit = async () => {
  //   console.log("Submitting form:", data);


  //   if (!isUrlValid(data.URL)) {
  //     console.error("Invalid URL");
  //     setFormErrors({ ...formErrors, URL: true });
  //     return;
  //   }

  //   const requiredFields = ["Title", "Description", "URL"];
  //   const newFormErrors = {};
  //   let isValid = true;

  //   requiredFields.forEach((field) => {
  //     if (!data[field]) {
  //       newFormErrors[field] = true;
  //       isValid = false;
  //     } else {
  //       newFormErrors[field] = false;
  //     }
  //   });

  //   setFormErrors(newFormErrors);

  //   if (isValid) {
  //     try {


  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   }

  // };



  const handleSubmit = async () => {
    console.log("Submitting form:", data);

    if (!isUrlValid(data.URL)) {
      console.error("URL");
      setFormErrors({ ...formErrors, URL: true });
      return;
    }
    const requiredFields = ["Title", "Description", "URL"];
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
        if (initialData) {
          await updateVideo({ data });
          setOpenEdit(false);
        } else {
          await uploadVideo({ ...data, userId: user.sub });
          setData({
            // title: "",
            // shortDescription: "",
            // videoLink: "",
            // description: "",
            // state: "draft",
            // timestamp: "",
            // messages: "",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  return (
    <Box
      component="form"
      autoComplete="off"
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
        value={data.Title}
        defaultValue={data.Title}
        onChange={handleChange("Title")}
        margin="normal"
        required
        error={formErrors.Title}
        helperText={formErrors.Title && "Title is required"}
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
        value={data.URL}
        defaultValue={data.URL}
        onChange={handleChange("URL")}
        margin="normal"
        required
        error={formErrors.URL}
        helperText={
          formErrors.URL && "Provide a valid YouTube or Vimeo url."
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
            borderColor: formErrors.URL
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
        value={data.ShortDescription}
        defaultValue={data.ShortDescription}
        onChange={handleChange("ShortDescription")}
        margin="normal"
        required
        error={formErrors.ShortDescription}
        helperText={formErrors.ShortDescription && "Description is required"}
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
        value={data.Description}
        defaultValue={data.Description}
        onChange={handleChange("Description")}
        margin="normal"
        multiline
        rows={3}
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

      <Button
        template="yellow"
        variant="outlined"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default VideoForm;
