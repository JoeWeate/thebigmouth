import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { pink } from "@mui/material/colors";
const AllUsersPage = ({ state }) => {
  // const { users, isLoading } = useAuth0();
  const [usersProfileData, setUsersProfileData] = useState("");
  const user = {
    name: "Jessica Parker",
    email: "jessica@example.com",
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // if (isLoading || !user) {
  //     //   return;
  //     // }
  //     try {
  //       const userData = await getUsers();
  //       setUsersProfileData(userData.users);
  //     } catch (error) {
  //       console.error({ error });
  //     }
  //   };
  //   fetchData();
  // }, [isLoading]);
  // console.log(usersProfileData);
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={3} sx={{ my: 4, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: pink[500], width: "auto", height: 100 }}>
            {user.name.charAt(0)}
          </Avatar>
          <Typography component="h1" variant="h5">
            {user.name}
          </Typography>

          <Button variant="contained" color="error" sx={{ mt: 2 }}>
            Block account
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AllUsersPage;
