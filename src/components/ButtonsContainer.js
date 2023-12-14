import React from "react";
import { Box } from "@mui/material";


const ButtonsContainer = ({ children }) => {

  return (
      <Box sx={{ display: "flex", alignItems:{sm: 'center'}, gap: "1rem", my: "1rem", flexDirection: {xs: "column", sm: "row"}}}>
      {children}
    </Box>
  );
};
export default ButtonsContainer;
