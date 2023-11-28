import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
      case 10:
        sortedData.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 20:
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 30:
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
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
          <MenuItem value={10}>Author</MenuItem>
          <MenuItem value={20}>Title</MenuItem>
          <MenuItem value={30}>Upload date</MenuItem>
        </CustomSelect>
      </FormControl>
    </Box>
  );
}
