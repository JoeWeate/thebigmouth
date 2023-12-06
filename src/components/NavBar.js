import {useContext} from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
import {MyContext} from "../App";
import {routes} from "../routes";
import {USER_ROLE} from "../utils/constants";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/TheBigHouse.png";
import SearchIcon from "@mui/icons-material/Search";
const pages = [
  "HOME",
  "ABOUT US",
  "THEATRE",
  "TBH MEANS BUSINESS",
  "THE BIG MOUTH",
  "VIDEOHUB",
];
const settingsLogin = ["Profile", "Dashboard"];
function NavBar() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const { userRole } = useContext(MyContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 999,
        backgroundColor: "black",
        maxHeight: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => {
              navigate("/");
            }}
            component="img"
            sx={{
              width: 50,
              mr: 8,
            }}
            alt="The Big House Logo"
            src={Logo}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="search"
              color="inherit"
              sx={{ ml: 2, mr: 2 }}
              onClick={() =>
                  alert(
                      "This section is currently under development. Please take a look at THE BIG MOUTH, VIDEOHUB pages and the USER environment as well."
                  )
              }
            >
              <SearchIcon/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                mr: 2,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                overflow: "hidden",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => {
                      if (
                        page === "ABOUT US" ||
                        page === "THEATRE" ||
                        page === "TBH MEANS BUSINESS"
                      ) {
                        alert(
                          "This section is currently under development. Please take a look at THE BIG MOUTH, VIDEOHUB pages, and the USER environment as well."
                        );
                      } else {
                        navigate(
                          page === "HOME" || page === "THE BIG MOUTH"
                            ? routes.home.path
                            : page === "VIDEOHUB"
                            ? routes.videoHub.home.path
                            : "#"
                        );
                      }
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  if (
                    page === "ABOUT US" ||
                    page === "THEATRE" ||
                    page === "TBH MEANS BUSINESS"
                  ) {
                    alert(
                      "This section is currently under development. Please take a look at THE BIG MOUTH, VIDEOHUB pages and the USER environment as well."
                    );
                  } else {
                    navigate(
                      page === "HOME" || page === "THE BIG MOUTH"
                        ? routes.home.path
                        : page === "VIDEOHUB"
                        ? routes.videoHub.home.path
                        : "#"
                    );
                  }
                }}
                sx={{
                  my: 2,
                  ml: 7,
                  color: "white",
                  display: "block",
                  fontWeight: "600",
                  fontSize: { md: "default", sm: "small" },
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
                  "&:hover::after": {
                    visibility: "visible",
                    transform: "scaleX(1)",
                  },
                  "@media (max-width: 1210px)": {
                    ml: 6,
                  },
                  "@media (max-width: 1170px)": {
                    ml: 5,
                  },
                  "@media (max-width: 1120px)": {
                    ml: 3,
                  },
                  "@media (max-width: 1010px)": {
                    ml: 0.6,
                  },
                  "@media (max-width: 900px)": {
                    ml: 0.5,
                    fontSize: "smaller",
                  },
                }}
              >
                {page}
              </Button>
            ))}
            <IconButton
              size="large"
              edge="end"
              aria-label="search"
              color="inherit"
              sx={{ ml: 2, mr: 2 }}
              onClick={() =>
                  alert(
                      "This section is currently under development. Please take a look at THE BIG MOUTH, VIDEOHUB pages and the USER environment as well."
                  )
              }
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Icon"
                  src={
                    user
                      ? user.picture
                      : "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/user.png"
                  }
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAuthenticated && (
                <MenuItem disabled>
                  <Typography sx={{ textAlign: "center", color: "grey" }}>
                    Hi, {user.given_name}!
                  </Typography>
                </MenuItem>
              )}
              {isAuthenticated &&
                settingsLogin.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      onClick={() =>
                        navigate(
                          setting === "Profile"
                            ? routes.videoHub.profile.path
                            : setting === "Dashboard"
                                ? routes.dashboard[userRole][userRole === USER_ROLE.ADMIN ? "allUsersVideos" : "approved"].path
                            : "#"
                        )
                      }
                      textAlign="center"
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              <MenuItem>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
