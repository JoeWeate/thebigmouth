import React, { useState, useRef } from "react";
import { Box, TextField, useTheme, MenuItem } from "@mui/material";
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

const SuccessMessage = styled.div({
  color: "#EB038F",
  marginTop: "1rem",
});

function isUrlValid(videoLink) {
  const urlRegex =
    /^(https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|vimeo\.com\/(\d+))/;
  return urlRegex.test(videoLink);
}

const VideoForm = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const fileInputRef = useRef(null);

  const [data, setData] = useState({
    Title: "",
    Description: "",
    ShortDescription: "",
    URL: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

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

  return (
    <Box
      component="form"
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
        id="Title"
        name="Title"
        value={data.Title}
        onChange={handleChange}
        margin="normal"
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
        name="ShortDescription"
        value={data.ShortDescription}
        onChange={handleChange}
        margin="normal"
        error={formErrors.ShortDescription}
        helperText={
          formErrors.ShortDescription && "Short description is required"
        }
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
        label="Description"
        id="Description"
        name="Description"
        value={data.Description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={2}
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
        InputProps={{
          style: {
            ...theme.overrides.MuiOutlinedInput.input,
            backgroundColor: "#852256",
          },
        }}
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
            variant="outlined"
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

      <Button template="pink" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Box>
  );
};

export default VideoForm;
