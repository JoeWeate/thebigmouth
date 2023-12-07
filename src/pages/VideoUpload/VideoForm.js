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

function isUrlValid(url) {
  const urlRegex =
    /^(https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|vimeo\.com\/(\d+))/;
  return urlRegex.test(url);
}

const VideoForm = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const fileInputRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    shortDescription: "",
    videoLink: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
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

    const requiredFields = ["title", "shortDescription", "description"];
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
    if (selectedOption === "videoLink" && !isUrlValid(data.videoLink)) {
      newFormErrors[selectedOption] = true;
      newFormErrors["videoLink"] = true;
      isValid = false;
    } else {
      newFormErrors.videoLink = false;
    }

    setFormErrors(newFormErrors);

    if (isValid) {
      try {
        if (
          selectedOption === "videoLink" &&
          data.videoLink &&
          isUrlValid(data.videoLink)
        ) {
          // If it's a link - POST
          const linkResponse = await UploadUrlData({
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
          await UploadFileData(file, user.sub, data, setData);
        } else {
          console.error("No file or valid video link provided.");
        }
      } catch (error) {
        console.error("Error handling file upload:", error);
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
        error={formErrors.shortDescription}
        helperText={formErrors.description && "Short description is required"}
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
        rows={2}
        error={formErrors.description}
        helperText={formErrors.description && "Description is required"}
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
              : selectedOption === "url"
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

      <Button template="yellow" variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default VideoForm;
