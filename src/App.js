import {useAuth0} from "@auth0/auth0-react";
import { Grid } from "@mui/material";
import {createContext, useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import {getUserById} from "./api/users";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";

// Create the context
export const MyContext = createContext();

function MyContextProvider({ children }) {
    const { user } = useAuth0();
    const [contextValue, setContextValue] = useState({});

    useEffect(() => {
       if( user ){
           const userId = user.sub;
           const getUserRole = async () => {
               await getUserById(userId).then(data => {
                   setContextValue({userID: userId, userRole: data.user.Role})
               }).catch(error => console.log(error));
            }
           getUserRole();
       }
    }, [user]);
    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

function App() {
  return (
    <MyContextProvider>
    <Grid
      container
      display="flex"
      direction="column"
      id="root"
      sx={{
        pt: {xs: "56px", md: "64px"},
        minHeight: "100dvh",
        flexWrap: "nowrap",
      }}
    >
      <NavBar />
      <main style={{ display: "flex", flexDirection: "column", flexGrow: 1, maxWidth: "100%" }}>
        <Outlet />
      </main>
      <Footer/>
    </Grid>
    </MyContextProvider>
  );
}

export default App;
