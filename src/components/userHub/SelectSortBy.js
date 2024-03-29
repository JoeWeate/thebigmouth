import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const userName = "user name";
const title = "title";
const uploadDate = "upload Date";
const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    backgroundColor: "black",
    color: "white",
    "&:focus": {
      backgroundColor: "black",
    },
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E6007E",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "#E6007E",
  },
}));

export default function SelectSortBy({ setVideoData, videoData }) {
  const [sortOption, setSortOption] = React.useState("");

  const handleChange = (event) => {
    setSortOption(event.target.value);
    const sortedData = [...videoData];

    switch (event.target.value) {
      case userName:
        sortedData.sort((a, b) => a.UserName.localeCompare(b.UserName));
        break;
      case title:
        sortedData.sort((a, b) => a.Title.localeCompare(b.Title));
        break;
      case uploadDate:
        sortedData.sort(
          (a, b) => new Date(a.Timestamp) - new Date(b.Timestamp)
        );
        break;
    }

    setVideoData(sortedData);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Sort by
        </InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortOption}
          label="Sort by"
          onChange={handleChange}
          IconComponent={ArrowDropDownIcon}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Sort by
          </MenuItem>
          <MenuItem value={userName}>Author</MenuItem>
          <MenuItem value={title}>Title</MenuItem>
          <MenuItem value={uploadDate}>Upload date</MenuItem>
        </CustomSelect>
      </FormControl>
    </Box>
  );
}
