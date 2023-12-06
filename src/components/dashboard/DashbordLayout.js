import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
} from "@mui/material";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {MyContext} from "../../App";
import {routes} from "../../routes";
import DashboardSidebar from "./DashbordSidebar";


function DashboardLayout() {
  const theme = useTheme();
  const { role } = useParams();
  const location = useLocation();
  console.log(location)
  const { userRole } = useContext(MyContext);
  const { user } = useAuth0();
  const navigate = useNavigate();

  if(!user || userRole !== role){
    navigate(routes.videoHub.home.path)
  } else {
      return (
          <Box sx={{ display: "flex", flexGrow: 1, zIndex: 0, width: "100%", backgroundColor: "#121212" }}>
              <DashboardSidebar />
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
                  <Outlet/>
              </Box>
          </Box>
      );
  }


}
export default DashboardLayout;
