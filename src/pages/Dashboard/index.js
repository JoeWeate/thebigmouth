import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import GroupIcon from "@mui/icons-material/Group";
import { Typography, Box } from "@mui/material";
import VideosPage from "./VideosPage";
import AllUsersPage from "./AllUsersPage";
import { getVideos } from "../../api/userHubVideos";
function Dashboard({ user }) {
  user = { UserID: "user1", Name: "Name", Role: "Admin" }; //test object
  const [videoList, setVideoList] = useState(null);
  const [videoState, setVideoState] = useState(
    user.Role === "User" ? "All my videos" : "All Users"
  );
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    try {
      getVideos().then((data) => {
        user.Role === "Admin"
          ? setVideoList(data.videos)
          : setVideoList(
              data.videos.filter((video) => video.UserID === user.UserID)
            );
      });
    } catch (error) {
      console.log({ error });
    }
  }, []);
  console.log(videoList);
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

  const menuItems = user.Role === "Admin" ? adminMenuItems : userMenuItems;

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
      <Sidebar collapsed={collapsed} backgroundColor="rgba(0, 0, 0, 1)">
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
          backgroundColor: "white",
        }}
      >
        {videoState === "allUsers" ? (
          <AllUsersPage state={videoState} />
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
