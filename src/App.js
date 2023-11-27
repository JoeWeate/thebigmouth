import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      id="root"
      style={{
        paddingTop: 60,
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <main style={{ display: "flex", flexGrow: 1, alignItems: "flex-start", maxWidth: "100%" }}>
        <Outlet />
      </main>
    </Grid>
  );
}

export default App;
