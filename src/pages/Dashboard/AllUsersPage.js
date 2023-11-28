import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AllUsersPage = ({ state }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#ff5d8f",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          animation: "pulse 2s infinite ease-in-out",
        }}
      >
        Coming soon...
      </Typography>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default AllUsersPage;
