import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import GroupIcon from "@mui/icons-material/Group";
import { Typography, Box, CircularProgress } from "@mui/material";
import VideosPage from "./VideosPage";
import AllUsersPage from "./AllUsersPage";
import { getAllVideoByUserID, getVideos } from "../../api/videos";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserById } from "../../api/users";
import { useTheme } from "@emotion/react";

const adminMenuItems = [
  { icon: <GroupIcon />, text: "All Users", state: "allUsers" },
  {
    icon: <OndemandVideoIcon />,
    text: "All User Videos",
    state: "approved",
  },
  {
    icon: <HourglassBottomIcon />,
    text: "Waiting List",
    state: "pending",
  },
  {
    icon: <DoNotDisturbOnIcon />,
    text: "Restricted",
    state: "rejected",
  },
];

const userMenuItems = [
  {
    icon: <OndemandVideoIcon />,
    text: "All My Live Videos",
    component: "videos",
    state: "approved",
  },
  {
    icon: <EditNoteIcon />,
    text: "Draft",
    state: "draft",
  },
  {
    icon: <HourglassBottomIcon />,
    text: "Pending",
    state: "pending",
  },
  {
    icon: <DoNotDisturbOnIcon />,
    text: "Restricted",
    state: "rejected",
  },
];

function Dashboard() {
  const theme = useTheme();
  const { user, isLoading } = useAuth0();
  const [videoList, setVideoList] = useState(null);
  const [videoState, setVideoState] = useState("loading");
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (isLoading || !user || !user.sub) {
        return;
      }
      try {
        const userData = await getUserById(user.sub);
        setRole(userData.user.Role);
        if (role === "Admin") {
          const videosData = await getVideos();
          setVideoState("allUsers");
          setVideoList(videosData.videos);
        } else {
          const videosUserData = await getAllVideoByUserID(
            userData.user.UserID
          );
          setVideoList(videosUserData.videos);
          setVideoState("approved");
        }
      } catch (error) {
        console.error({ error });
      }
    };

    fetchData();
  }, [isLoading, user]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (state) => {
    setVideoState(state);
  };

  const menuItems = role === "Admin" ? adminMenuItems : userMenuItems;

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 56px)",
        width: "100vw",
        color: "white",
        marginTop: {
          xs: "-4px",
          sm: "4px",
        },
      }}
    >
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#0a100d"
        rootStyles={{
          borderColor: "#2B2B2B",
        }}
      >
        <Menu>
          <MenuItem
            rootStyles={{
              ":hover": {
                color: "black",
              },
            }}
            onClick={toggleSidebar}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              {collapsed ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
              {!collapsed && <Typography>Dashboard</Typography>}
            </button>
          </MenuItem>
          {menuItems.map((item, index) => (
            <MenuItem
              rootStyles={{
                ":hover": {
                  color: "black",
                },
              }}
              key={index}
              icon={item.icon}
              onClick={() => handleMenuClick(item.state)}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      <Box
        sx={{
          flexGrow: 0,
          transition: "margin-left 0.3s",
          width: "100%",
          padding: "10px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {videoState === "allUsers" ? (
          <AllUsersPage state={videoState} />
        ) : videoState === "loading" ? (
          <CircularProgress />
        ) : (
          <VideosPage
            state={videoState}
            data={
              videoList &&
              videoList.filter((video) => video.State === videoState)
            }
          />
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
