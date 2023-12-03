import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import GroupIcon from "@mui/icons-material/Group";
import VideosPage from "./VideosPage";
import AllUsersPage from "./AllUsersPage";
import {
  getAllVideoByUserID,
  getAllVideosByState,
  getVideos,
} from "../../api/videos";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth0();
  const [videoList, setVideoList] = useState([]);
  const [videoState, setVideoState] = useState("approved");
  const [collapsed, setCollapsed] = useState(false);
  const { userRole } = useContext(MyContext);
  const [updateData, setUpdateData] = useState(0);
  console.log(userRole);
  useEffect(() => {
    const fetchDataAdmin = async () => {
      if (userRole !== "Admin") {
        return;
      }
      try {
        const videosData = await getAllVideosByState(videoState);
        console.log(videosData.videos);
        setVideoList(videosData.videos);
        console.log(videoList);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchDataAdmin();
  }, [isLoading, videoState, userRole]);
  useEffect(() => {
    const fetchDataUser = async () => {
      if (userRole !== "User" || !user) {
        return;
      }
      try {
        const videosUserData = await getAllVideoByUserID(user.sub);
        setVideoList(videosUserData.videos);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchDataUser();
  }, [isLoading, userRole, updateData]);

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => setCollapsed(!collapsed);
  const handleMenuClick = (state) => {
    if (userRole) {
      setVideoState(state);
      setUpdateData((updateData) => updateData + 1);
    }
  };
  const menuItems =
    userRole === "Admin"
      ? [
          { icon: <GroupIcon />, text: "All Users", state: "allUsers" },
          {
            icon: <OndemandVideoIcon />,
            text: "All User Videos",
            state: "approved",
          },
          {
            icon: <HourglassBottomIcon />,
            text: "Waiting List",
            state: "inReview",
          },
          {
            icon: <DoNotDisturbOnIcon />,
            text: "Restricted",
            state: "blocked",
          },
        ]
      : [
          {
            icon: <OndemandVideoIcon />,
            text: "All My Live Videos",
            state: "approved",
          },
          { icon: <EditNoteIcon />, text: "Draft", state: "draft" },
          {
            icon: <HourglassBottomIcon />,
            text: "In Review",
            state: "inReview",
          },
          {
            icon: <DoNotDisturbOnIcon />,
            text: "Restricted",
            state: "blocked",
          },
        ];
  console.log(videoState);
  return (
    <Box sx={{ display: "flex", height: "100vh", zIndex: 0, width: "100%" }}>
      <Drawer
        PaperProps={{
          sx: {
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            height: {
              xs: "calc(100% - 56px)",
              sm: "calc(100% - 64px)",
              md: "calc(100% - 64px)",
              lg: "calc(100% - 64px)",
              xl: "calc(100% - 64px)",
            },
            top: {
              xs: 56,
              sm: 64,
              md: 64,
              lg: 64,
              xl: 64,
            },
          },
        }}
        variant="permanent"
        open={!collapsed}
        onClose={toggleSidebar}
        sx={{
          width: collapsed ? theme.spacing(7) : theme.spacing(28),
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsed ? theme.spacing(7) : theme.spacing(28),
            boxSizing: "border-box",
          },
        }}
      >
        <List
          sx={{
            "& .MuiListItem-root": {
              cursor: "pointer",
              position: "relative",
              "& .MuiListItemText-root": {
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "-3px",
                  right: 0,
                  backgroundColor: "#E6007E",
                  visibility: "hidden",
                  transform: "scaleX(0)",
                  transition: "all 0.3s ease-in-out",
                },
              },
              "&:hover .MuiListItemText-root::after": {
                visibility: "visible",
                transform: "scaleX(1)",
                transformOrigin: "right",
              },
            },
          }}
        >
          <ListItem button onClick={toggleSidebar}>
            <ListItemIcon>
              {collapsed ? (
                <Tooltip title="Show Dashboard">
                  <ArrowForwardIosIcon />
                </Tooltip>
              ) : (
                <Tooltip title="Hide Dashboard">
                  <ArrowBackIosIcon />
                </Tooltip>
              )}
            </ListItemIcon>
          </ListItem>
          <ListItem button key="user-hub" onClick={() => navigate("/videohub")}>
            <ListItemIcon
              sx={{
                minWidth: collapsed ? "auto" : "40px",
                justifyContent: "center",
                marginRight: collapsed ? 0 : theme.spacing(1),
              }}
            >
              {collapsed ? (
                <Tooltip title="Back to VIDEOHUB">
                  <KeyboardReturnIcon />
                </Tooltip>
              ) : (
                <KeyboardReturnIcon />
              )}
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Back to VIDEOHUB" />}
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleMenuClick(item.state)}
            >
              <ListItemIcon
                sx={{
                  minWidth: collapsed ? "auto" : "40px",
                  justifyContent: "center",
                  marginRight: collapsed ? 0 : theme.spacing(1),
                }}
              >
                {collapsed ? (
                  <Tooltip title={item.text}>{item.icon}</Tooltip>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          height: "100vh",
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.default,
          width: "100%",
        }}
      >
        {videoState === "allUsers" ? (
          <AllUsersPage state={videoState} />
        ) : !isLoading && !userRole && !updateData ? (
          <CircularProgress />
        ) : (
          <VideosPage
            state={videoState}
            setUpdateData={setUpdateData}
            data={videoList.filter((video) => video.State === videoState)}
          />
        )}
      </Box>
    </Box>
  );
}
export default Dashboard;
