import { useAuth0 } from "@auth0/auth0-react"
import { Grid, Typography } from "@mui/material"
import React from "react"

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    user && (
      <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, paddingTop: 5}}>
        <img src={user.picture} alt={user.name} width={150}/>
        <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </Grid>
    )
  );
};

export default Profile;