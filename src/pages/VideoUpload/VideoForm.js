import {isEmpty} from "lodash";
import React, {useContext, useEffect, useState, useRef} from "react";
import { Box, TextField, useTheme, MenuItem } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {MyContext} from "../../App";
import ButtonsContainer from "../../components/ButtonsContainer";
import Snackbar from "../../components/Snackbar";
import UpdateVideoStateButton from "../../components/UpdateVideoStateButton";
import {routes} from "../../routes";
import {ACTION_NAME, VIDEO_DATA_KEYS, VIDEO_OPTION, VIDEO_STATE} from "../../utils/constants";
import Button from "../../components/Button";
import { apiUploadFileData, apiUploadUrlData } from "../../api/videos";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";

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

const isUrlValid = (url) => {
  const urlRegex = /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|thebigmouth-user-videos\.s3\.eu-west-2\.amazonaws\.com|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;
  return urlRegex.test(url);
};

const VideoForm = ({ initialData, getUpdatedVideos, setOpenEdit, videoOption }) => {
  const isEditForm = initialData;
  const navigate = useNavigate();
  const { userID, userName, userRole } = useContext(MyContext);
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData || {});
  //FILE UPLOAD
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedOption, setSelectedOption] = useState(videoOption || undefined);
  const [formErrors, setFormErrors] = useState({
    [VIDEO_DATA_KEYS.TITLE]: false,
    [VIDEO_DATA_KEYS.SHORT_DESCRIPTION]: false,
    [VIDEO_DATA_KEYS.DESCRIPTION]: false,
    SELECTED_OPTION: false,
    [VIDEO_DATA_KEYS[selectedOption]]: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    [VIDEO_DATA_KEYS.TITLE]: "",
    [VIDEO_DATA_KEYS.SHORT_DESCRIPTION]: "",
    [VIDEO_DATA_KEYS[selectedOption]]: "",
    [VIDEO_DATA_KEYS.DESCRIPTION]: "",
    SELECTED_OPTION: "",
  });


  //SNACKBAR
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
   });

  // const form = event.target;

  // const formData = new FormData(videoFormRef.current);

  const handleValidation = () => {
    const newFormErrors = {
      [VIDEO_DATA_KEYS.TITLE]: !formData[VIDEO_DATA_KEYS.TITLE],
      [VIDEO_DATA_KEYS.SHORT_DESCRIPTION]: !formData[VIDEO_DATA_KEYS.SHORT_DESCRIPTION],
      [VIDEO_DATA_KEYS.DESCRIPTION]: !formData[VIDEO_DATA_KEYS.DESCRIPTION],
      SELECTED_OPTION: !selectedOption,
      [VIDEO_DATA_KEYS.URL]: (selectedOption ? (selectedOption === VIDEO_OPTION.URL ? !isUrlValid(formData[VIDEO_DATA_KEYS.URL]) : false) : false),
      [VIDEO_DATA_KEYS.FILE]: (selectedOption ? (selectedOption === VIDEO_OPTION.FILE? !file : false) : false),
    };

    const newErrorMessages = {
      [VIDEO_DATA_KEYS.TITLE]: newFormErrors[VIDEO_DATA_KEYS.TITLE] ? "Title is required" : "",
      [VIDEO_DATA_KEYS.SHORT_DESCRIPTION]: newFormErrors[VIDEO_DATA_KEYS.SHORT_DESCRIPTION] ? "Short description is required" : "",
      [VIDEO_DATA_KEYS[selectedOption]]: selectedOption ? (selectedOption === VIDEO_OPTION.URL && newFormErrors[VIDEO_DATA_KEYS[selectedOption]] ? "Invalid URL" : "No file provided") : "Please select an option",
      [VIDEO_DATA_KEYS.DESCRIPTION]: newFormErrors[VIDEO_DATA_KEYS.DESCRIPTION] ? "Description is required" : "",
      SELECTED_OPTION: newFormErrors.SELECTED_OPTION ? "Please select an option" : "",
    };

    setFormErrors(newFormErrors);
    setErrorMessages(newErrorMessages);

    return Object.values(newFormErrors).every((error) => error === false);
  };

  const handleChange = (key) => (event) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if(!selectedFile) {
      setFile(null);
      setFileName(null);
      return;
    }
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  useEffect(()=>{
    if (isEmpty(formData) || formData === initialData) {
      return;
    }
    handleValidation();
  }, [formData, selectedOption, file])


  const onSuccessfulSubmit = async () => {
    if(isEditForm) {
      setOpenEdit(false);
    } else {
      setTimeout(() => {
        navigate(routes.dashboard[userRole][VIDEO_STATE.DRAFT].path)
      }, 0);
    }
  }
  const onFailedSubmit = () => {
    setTimeout(()=>{
      setSnackbar({
        open: true,
        type: "error",
        message: "Error submitting the file. Please try again."})
    } ,0)

  }

  const handleFileClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      try {
        const data = isEditForm ? null : {
          ...formData,
          UserID: userID,
          UserName: userName,
        };
        setLoading(true);
        if (selectedOption === VIDEO_OPTION.URL && formData.URL && isUrlValid(formData.URL)) {
          await apiUploadUrlData(data, onSuccessfulSubmit, onFailedSubmit);

        } else if (selectedOption === VIDEO_OPTION.FILE && file) {
          await apiUploadFileData(file, data, onSuccessfulSubmit, onFailedSubmit);
        }
      } catch (error) {
        console.error("Error handling file upload:", error);

      } finally {
        setLoading(false);
      }
   }
  };
  const isFormValid = Object.values(formErrors).every((error) => error === false);
  console.log({formErrors})
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: {
          maxWidth: "700px",
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
        name={VIDEO_DATA_KEYS.TITLE}
        value={formData[VIDEO_DATA_KEYS.TITLE]}
        defaultValue=""
        onChange={handleChange(VIDEO_DATA_KEYS.TITLE)}
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
          name={VIDEO_DATA_KEYS.SHORT_DESCRIPTION}
          value={formData[VIDEO_DATA_KEYS.SHORT_DESCRIPTION]}
          defaultValue=""
          onChange={handleChange(VIDEO_DATA_KEYS.SHORT_DESCRIPTION)}
          margin="normal"
          required
          error={formErrors[VIDEO_DATA_KEYS.SHORT_DESCRIPTION]}
          helperText={errorMessages[VIDEO_DATA_KEYS.SHORT_DESCRIPTION]}
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
        name={VIDEO_DATA_KEYS.DESCRIPTION}
        value={formData[VIDEO_DATA_KEYS.DESCRIPTION]}
        defaultValue=""
        required
        error={formErrors[VIDEO_DATA_KEYS.DESCRIPTION]}
        helperText={errorMessages[VIDEO_DATA_KEYS.DESCRIPTION]}
        onChange={handleChange(VIDEO_DATA_KEYS.DESCRIPTION)}
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
          label={selectedOption ? "Video Upload Type" : "Select how you want to upload your video"}
          value={selectedOption}
          onChange={handleOptionChange}
          margin="normal"
          error={formErrors.SELECTED_OPTION}
          helperText={errorMessages.SELECTED_OPTION}
      >
        <MenuItem value="" disabled>
          Select Video Upload Type
        </MenuItem>
        <MenuItem value={VIDEO_OPTION.FILE}>File Upload</MenuItem>
        <MenuItem value={VIDEO_OPTION.URL}>URL</MenuItem>
        </TextField>

      {selectedOption === VIDEO_OPTION.FILE ? (
          <ButtonsContainer>
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
                  name={VIDEO_DATA_KEYS.FILE}
                  onChange={handleFileChange}
                  ref={fileInputRef}
              />
            </Button>
            {fileName ? fileName : "Upload file"}
          </ButtonsContainer>
      ) : selectedOption === VIDEO_OPTION.URL ? (
          <TextField
              fullWidth
              placeholder="Add your YouTube or Vimeo URL"
              label="Link"
              id="VideoLink"
              name={VIDEO_DATA_KEYS.URL}
              value={formData[VIDEO_DATA_KEYS.URL]}
              defaultValue={formData[VIDEO_DATA_KEYS.URL]}
              onChange={handleChange(VIDEO_DATA_KEYS.URL)}
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
      ) : null}
      <ButtonsContainer>
        <>
          {isEditForm ? (
              <UpdateVideoStateButton videoData={formData} action={ACTION_NAME.EDIT}  disabled={!isFormValid} getUpdatedVideos={getUpdatedVideos}/>
          ) : (
              <Button type='submit' template="yellow" variant="outlined" onClick={handleSubmit} disabled={!isFormValid || loading} loadingButton loading={loading}>
                <span>Submit</span>
              </Button>
          )}
        </>
      </ButtonsContainer>
      <Snackbar
          open={snackbar.open}
          handleClose={handleSnackbarClose}
          type={snackbar.type}
          message={snackbar.message}/>
    </Box>
  );
};

export default VideoForm;
