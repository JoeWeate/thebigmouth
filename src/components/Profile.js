import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserById } from "../api/users";

const Profile = () => {
  const { user, isLoading } = useAuth0();
  const [userProfileData, setUserProfileData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (isLoading || !user) {
        return;
      }
      try {
        const userData = await getUserById(user.sub);
        setUserProfileData(userData.user);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchData();
  }, [isLoading]);
  console.log(userProfileData);
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={3} sx={{ my: 4, p: 3 }}>
        {!isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="User Icon"
              src={
                user
                  ? user.picture
                  : "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/user.png"
              }
              sx={{
                m: 1,
                width: "auto",
                height: 120,
                border: "0.2rem solid #E6007E",
              }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              {userProfileData.Name}
            </Typography>
            <Tooltip title="This feature is under development." arrow>
              <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload profile photo
                <input type="file" hidden />
              </Button>
            </Tooltip>
            <Typography component="h6" sx={{ mt: 2 }}>
              Role: {userProfileData.Role}
            </Typography>
            <Tooltip title="This feature is under development." arrow>
              <Button variant="outlined" startIcon={<Add />} sx={{ mt: 2 }}>
                Add Bio
              </Button>
            </Tooltip>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label=""
              name="email"
              autoComplete="email"
              value={userProfileData.Email}
              InputProps={{
                readOnly: true,
              }}
            />
            <Tooltip title="This feature is under development." arrow>
              <Button variant="outlined" startIcon={<Add />} sx={{ mt: 2 }}>
                Add Telephone
              </Button>
            </Tooltip>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 2 }}
            >
              Your telephone number and email is considered private information
              and will not be disclosed or made available to other users. We
              prioritize the confidentiality and security of your personal
              details, including your telephone number and email.
            </Typography>
            <Tooltip title="This feature is under development." arrow>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#E6007E", color: "white" }}
              >
                Delete my account
              </Button>
            </Tooltip>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress size={150} sx={{ color: "#E6007E" }} />
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
