import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import UpdateVideoStateButton from "../../components/UpdateVideoStateButton";
import { routes } from "../../routes";
import { Box, TextField, useTheme, MenuItem } from "@mui/material";
import { ACTION_NAME as VIDEO_ACTION } from "../../utils/constants";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import Button from "../../components/Button";

const isUrlValid = (url) => {
  const urlRegex =
    /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;
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
  const { userID, userName } = useContext(MyContext);
  const theme = useTheme();
  const [data, setData] = useState(initialData || {});
  const [formErrors, setFormErrors] = useState({
    Title: false,
    ShortDescription: false,
    URL: false,
    Description: false,
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile.name);
  };

  useEffect(() => {
    if (isEmpty(data) || data === initialData) {
      return;
    }
    validate();
  }, [data]);

  const onSuccessfulSubmit = () => {
    if (isEditForm) {
      setOpenEdit(false);
    } else {
      navigate(routes.dashboard.User.draft.path);
    }
  };

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
        padding: "1.5rem",
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
      <TextField
        fullWidth
        select
        sx={{ marginBottom: "1rem" }}
        label="Select how you want to upload your video "
        value={selectedOption}
        onChange={handleOptionChange}
        margin="normal"
        error={formErrors[selectedOption]}
        helperText={
          formErrors[selectedOption] === true
            ? selectedOption === "file"
              ? "Please select a file"
              : selectedOption === "URL"
              ? "URL is required"
              : ""
            : ""
        }
      >
        <MenuItem value="" disabled>
          Select Video Upload Type
        </MenuItem>
        <MenuItem value="file">File Upload</MenuItem>
        <MenuItem value="URL">URL</MenuItem>
      </TextField>

      {selectedOption === "file" ? (
        <Box
          sx={{
            position: "relative",
            display: "block",
          }}
        >
          <Button
            template="yellow"
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
      ) : selectedOption === "URL" ? (
        <TextField
          fullWidth
          placeholder="Add your YouTube or Vimeo URL"
          label="URL"
          id="URL"
          name="URL"
          value={data.URL}
          onChange={handleChange}
          margin="normal"
          error={formErrors.URL}
          helperText={formErrors.URL ? "Video link is required" : ""}
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
      <UpdateVideoStateButton
        videoData={
          isEditForm ? data : { ...data, UserID: userID, UserName: userName }
        }
        action={initialData ? VIDEO_ACTION.EDIT : VIDEO_ACTION.UPLOAD}
        additionalCbs={isEditForm ? { success: onSuccessfulSubmit } : null}
        disabled={isFormValid}
        getUpdatedVideos={getUpdatedVideos}
      />
    </Box>
  );
};

export default VideoForm;
