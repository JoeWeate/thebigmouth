import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      id="root"
      style={{
        paddingTop: 60,
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <NavBar />
      <main style={{ display: "flex", flexGrow: 1, alignItems: "flex-start" }}>
        <Outlet />
      </main>
      <Footer />
    </Grid>
  );
}

export default App;
