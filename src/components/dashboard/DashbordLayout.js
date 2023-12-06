import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
} from "@mui/material";
import {Outlet} from "react-router-dom";
import DashboardSidebar from "./DashbordSidebar";


function DashboardLayout() {
  const theme = useTheme();
  const [videoState, setVideoState] = useState("approved");
  const [updateData, setUpdateData] = useState(0);

  return (
    <Box sx={{ display: "flex", flexGrow: 1, zIndex: 0, width: "100%", backgroundColor: "#121212" }}>
      <DashboardSidebar videoState={videoState} setVideoState={setVideoState} updateData={updateData} setUpdateData={setUpdateData}/>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.default,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
       <Outlet context={{videoState, setVideoState, updateData, setUpdateData}}/>
      </Box>
    </Box>
  );
}
export default DashboardLayout;
