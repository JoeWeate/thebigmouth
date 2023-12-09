import { Grid } from "@mui/material";
import { getUserById, registerNewUser } from "../api/users";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {routes} from "../routes";

export default function PostAuthenticate() {
  const navigate = useNavigate();
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (user) {
      async function storeToken() {
        const accessToken = await getAccessTokenSilently();
        localStorage.setItem("access_token", accessToken);
        navigate(routes.videoHub.home.path);
      }

      async function checkIfUserExist() {
        const registeredUser = await getUserById(user.sub);
        if (!registeredUser) {
          console.log("User not found in DB");
          registerNewUser({
            UserID: user.sub,
            Email: user.email,
            Name: user.name,
            Role: "User",
          });
        }
      }

      storeToken()
        .then(() => {
          checkIfUserExist();
        })
        .catch((error) => console.log(error));
    }
  }, [user]);
  return <Grid>Loading..</Grid>;
}
