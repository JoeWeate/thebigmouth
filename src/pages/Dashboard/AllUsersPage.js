import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Grid,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Tooltip,
} from "@mui/material";
const AllUsersPage = ({ state }) => {
  const [usersProfileData, setUsersProfileData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUsers();
        setUsersProfileData(userData.users);
      } catch (error) {
        console.error({ error });
      }
    };
    fetchData();
  }, []);
  console.log(usersProfileData.users);
  return usersProfileData ? (
    <Container component="main">
      <CssBaseline />
      <Grid container spacing={2} sx={{ mt: 2, justifyContent: "center" }}>
        {usersProfileData.map((user, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                maxWidth: "500px",
                margin: "auto",
              }}
            >
              <Box sx={{ flexShrink: 0, mr: "2rem" }}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: "#E6007E" }}>
                  <Typography style={{ color: "white", fontSize: "4rem" }}>
                    {user.Name.charAt(0)}
                  </Typography>
                </Avatar>
              </Box>
              <Box sx={{ flexGrow: 1, ml: 2 }}>
                <Typography component="h2" variant="h4">
                  {user.Name}
                </Typography>
                <Typography variant="h6">{user.Email}</Typography>
                <Typography variant="h6">Role: {user.Role}</Typography>
                <Tooltip title="This feature is under development." arrow>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, bgcolor: "#E6007E", color: "white", ml: 20 }}
                  >
                    Block account
                  </Button>
                </Tooltip>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  ) : (
    <CircularProgress />
  );
};

export default AllUsersPage;
