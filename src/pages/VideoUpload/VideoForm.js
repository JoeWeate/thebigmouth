import {isEmpty} from "lodash";
import React, {useContext, useEffect, useState, useRef} from "react";
import { Box, TextField, useTheme, MenuItem } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {MyContext} from "../../App";
import UpdateVideoStateButton from "../../components/UpdateVideoStateButton";
import {routes} from "../../routes";
import {ACTION_NAME as VIDEO_ACTION} from "../../utils/constants";
import Button from "../../components/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { UploadFileData, UploadUrlData } from "../../api/videos";
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
  const urlRegex = /^(https?:\/\/)?(?:www\.)?(vimeo\.com\/(\d+)|youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))/;
  return urlRegex.test(url);
};
const SuccessMessage = styled.div({
  color: "#EB038F",
  marginTop: "1rem",
});


const VideoForm = ({ initialData, getUpdatedVideos, setOpenEdit }) => {
  const isEditForm = initialData;
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { userID, userName } = useContext(MyContext);
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
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

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

  useEffect(()=>{
    if (isEmpty(data) || data === initialData) {
      return;
    }
   validate();
  }, [data])


  const onSuccessfulSubmit = () => {
    if(isEditForm) {
      setOpenEdit(false);
    } else {
      navigate(routes.dashboard.User.draft.path)
    }
  }

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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = ["Title", "ShortDescription", "Description"];
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
    if (selectedOption === "") {
      newFormErrors[selectedOption] = true;
      isValid = false;
    } else {
      newFormErrors[selectedOption] = false;
    }
    if (selectedOption === "file" && !file) {
      newFormErrors[selectedOption] = true;
      isValid = false;
    }
    if (selectedOption === "URL" && !isUrlValid(data.URL)) {
      newFormErrors[selectedOption] = true;
      newFormErrors["URL"] = true;
      isValid = false;
    } else {
      newFormErrors.URL = false;
    }

    setFormErrors(newFormErrors);

    if (isValid) {
      try {
        if (selectedOption === "URL" && data.URL && isUrlValid(data.URL)) {
          // If it's a link - POST
          await UploadUrlData({
            ...data,
            UserID: user.sub,
            UserName: user.name,
          });

          setData({
            Title: "",
            ShortDescription: "",
            Description: "",
            URL: "",
          });
          setSuccessMessage("File submitted successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        } else if (selectedOption === "file" && file) {
          // If it's a file, do PUT first
          const formData = new FormData();
          formData.append("file", file);
          console.log("File uploaded successfully!", formData);

          // (PUT request)

          // Passing  the setData function to modify the state in the parent component
          await UploadFileData(file, user.sub, user.name, data, setData);
          console.log(user.name, "user.name");
          setData({
            Title: "",
            Description: "",
            ShortDescription: "",
            URL: "",
          });
          setFile(null);
          setFileName("");
          setSuccessMessage("File submitted successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        } else {
          console.error("No file or valid video link provided.");
        }
      } catch (error) {
        console.error("Error handling file upload:", error);
        setSuccessMessage("Error submitting the file. Please try again.");
      }
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
      ) : selectedOption === "URL" ? (
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
      ) : null}
      {isEditForm ? (
          <UpdateVideoStateButton videoData={isEditForm ? data : {...data, UserID: userID, UserName: userName}} action={initialData ? VIDEO_ACTION.EDIT : VIDEO_ACTION.UPLOAD} additionalCbs={isEditForm ? {success: onSuccessfulSubmit} : null} disabled={isFormValid} getUpdatedVideos={getUpdatedVideos}/>
      ) : (
          <Button template="yellow" variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
      )}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Box>
  );
};

export default VideoForm;
