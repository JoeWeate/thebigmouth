import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Tooltip, ListItemButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import GroupIcon from "@mui/icons-material/Group";

import {useNavigate, useParams} from "react-router-dom";
import { MyContext } from "../../App";
import {routes} from "../../routes";
import {USER_ROLE, VIDEO_STATE} from "../../utils/constants";

function DashboardSidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { role, page } = useParams();

  const [collapsed, setCollapsed] = useState(false);

  const { userRole } = useContext(MyContext);


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
    if (userRole && (userRole === role)) {
      navigate(`/dashboard/${role}/${state}`);
    }
  };
  const menuItems =
    userRole === USER_ROLE.ADMIN
      ? [
          { icon: <GroupIcon />, text: "All Users", state: "all-users" },
          {
            icon: <OndemandVideoIcon />,
            text: "All User Videos",
            state: VIDEO_STATE.APPROVED,
          },
          {
            icon: <HourglassBottomIcon />,
            text: "Waiting List",
            state: VIDEO_STATE.IN_REVIEW,
          },
          {
            icon: <DoNotDisturbOnIcon />,
            text: "Restricted",
            state: VIDEO_STATE.BLOCKED,
          },
        ]
      : [
          {
            icon: <OndemandVideoIcon />,
            text: "All My Live Videos",
            state: VIDEO_STATE.APPROVED,
          },
          { icon: <EditNoteIcon />, text: "Draft", state: "draft" },
          {
            icon: <HourglassBottomIcon />,
            text: "In Review",
            state: VIDEO_STATE.IN_REVIEW,
          },
          {
            icon: <DoNotDisturbOnIcon />,
            text: "Restricted",
            state: VIDEO_STATE.BLOCKED,
          },
        ];

  return (
      <Drawer
        PaperProps={{
          sx: {
            position: "relative",
            "&::-webkit-scrollbar": { display: "none" },
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
            "& .MuiListItemButton-root": {
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
                  backgroundColor: theme.palette.error.main,
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
          <ListItemButton onClick={toggleSidebar}>
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
          </ListItemButton>
          <ListItemButton key="user-hub" onClick={() => navigate(routes.videoHub.path)}>
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
          </ListItemButton>
          {menuItems.map(item => (
            <ListItemButton
              sx={{
                backgroundColor:
                  page === item.state ? theme.palette.error.main : "inherit",
              }}
              key={`${item.text}-${role}`}
              onClick={() =>
                handleMenuClick(item.state)
              }
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
            </ListItemButton>
          ))}
        </List>
      </Drawer>
  );
}
export default DashboardSidebar;
