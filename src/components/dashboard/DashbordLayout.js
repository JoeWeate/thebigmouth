import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
} from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { routes } from "../../routes";
import DashboardSidebar from "./DashbordSidebar";


function DashboardLayout() {
  const theme = useTheme();
  const { role } = useParams();
  const { userRole } = useContext(MyContext);
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate();

    useEffect(() => {
        if(!isLoading && !user || (userRole && (userRole !== role))) {
            navigate(routes.videoHub.home.path)
        }
    }, [isLoading, user, userRole]);

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
export default DashboardLayout;
