import { isEmpty } from "lodash";
import React, { useEffect, useState, useRef } from "react";
import { Box, TextField, useTheme, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import UpdateVideoStateButton from "../../components/UpdateVideoStateButton";
import { routes } from "../../routes";
import { ACTION_NAME as VIDEO_ACTION } from "../../utils/constants";
import { UploadFileData, UploadUrlData } from "../../api/videos";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";

const isUrlValid = (url) => {
  const urlRegex = /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;
  return urlRegex.test(url);
};
const VisuallyHiddenInput = styled.input({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  "&:focus": {
    outline: "none",
  },
  opacity: 0,
});


const VideoForm = ({ initialData, getUpdatedVideos, setOpenEdit }) => {
  const isEditForm = initialData;
  const navigate = useNavigate();
  const { user } = useAuth0();
  const theme = useTheme();
  const [data, setData] = useState(initialData || {});
  const [formErrors, setFormErrors] = useState({
    Title: false,
    ShortDescription: false,
    URL: false,
    Description: false,
  });
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const validate = () => {
    const newFormErrors = {
      Title: !data.Title,
      ShortDescription: !data.ShortDescription,
      URL: !isUrlValid(data.URL),
      Description: !data.Description,
    };
    setFormErrors(newFormErrors);
    return Object.values(newFormErrors).every((error) => error === false);
  };

  const handleChange = (key) => (event) => {
    setData({
      ...data,
      [key]: event.target.value,
    });
  };

  useEffect(() => {
    if (isEmpty(data) || data === initialData) {
      return;
    }
    validate();
    let isValid = true;
    if (isValid) {
      try {
        if (
          selectedOption === "videoLink" &&
          data.videoLink &&
          isUrlValid(data.videoLink)
        ) {
          // If it's a link - POST
          const linkResponse = UploadUrlData({
            ...data,
            userId: user.sub,
            source: "External",
          });
          console.log(linkResponse, "linkResponse");
        } else if (selectedOption === "file" && file) {
          // If it's a file, do PUT first
          const formData = new FormData();
          formData.append("file", file);
          console.log("File uploaded successfully!", formData);

          // (PUT request)

          // Passing  the setData function to modify the state in the parent component
          UploadFileData(file, user.sub, data, setData);
        } else {
          console.error("No file or valid video link provided.");
        }
      } catch (error) {
        console.error("Error handling file upload:", error);
      }
    }
  }, [data])

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleFileClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };
  const handleOptionChange = (event) => {
    const selectedValue =
      event.target.value === "" ? undefined : event.target.value;
    setSelectedOption(selectedValue);
  };


  const onSuccessfulSubmit = () => {
    if (isEditForm) {
      setOpenEdit(false);
    } else {
      navigate(routes.dashboard.User.draft.path)
    }
  }


  const isFormValid = Object.values(formErrors).some((error) => error);

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: {
          maxWidth: "700px",
        },
        height: "100%",
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


      {/* <TextField
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
      /> */}
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
        error={formErrors.Description}
        helperText={formErrors.Description && "Description is required"}
        sx={{
          paddingBottom: "1rem",
        }}
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
        select
        label="Select how you want to upload your video "
        value={selectedOption}
        onChange={handleOptionChange}
        margin="normal"
        error={formErrors[selectedOption]}
        helperText={
          formErrors[selectedOption] === true
            ? selectedOption === "file"
              ? "Please select a file"
              : selectedOption === "videoLink"
                ? "Video link is required"
                : ""
            : ""
        }
      >
        <MenuItem value="" disabled>
          Select Video Upload Type
        </MenuItem>
        <MenuItem value="file">File Upload</MenuItem>
        <MenuItem value="videoLink">URL</MenuItem>
      </TextField>

      {selectedOption === "file" ? (
        <Box
          sx={{
            position: "relative",
            display: "block",
          }}
        >
          <Button
            template="pink"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            component="label"
            onClick={handleFileClick}
            sx={{ textWrap: " nowrap" }}
          >
            Upload file
            <VisuallyHiddenInput
              accept="video/mp4"
              id="fileInput"
              type="file"
              name="file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </Button>
          {fileName ? fileName : "Upload file"}
        </Box>
      ) : selectedOption === "videoLink" ? (
        <TextField
          fullWidth
          placeholder="Add your YouTube or Vimeo URL"
          label="Link"
          id="VideoLink"
          name="videoLink"
          value={data.videoLink}
          onChange={handleChange}
          margin="normal"
          error={formErrors.videoLink}
          helperText={formErrors.videoLink ? "Video link is required" : ""}
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
      ) : null}

      <UpdateVideoStateButton videoData={data} getUpdatedVideos={getUpdatedVideos} action={initialData ? VIDEO_ACTION.EDIT : VIDEO_ACTION.UPLOAD} additionalCbs={{ success: onSuccessfulSubmit }} disabled={isFormValid} />
    </Box>
  );
};

export default VideoForm;
