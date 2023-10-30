import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Information from "./components/Page4/Information.js";
import PlaceholderVideo from "./components/Page4/PlaceholderVideo.js";
import AboutInfo from "./components/Page4/About/AboutInfo.js";
// import "./App.css";
import ShowMore from "./components/ShowMore";

function App() {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
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
      {/* <ShowMore /> */}
      <Footer />
    </Grid>
  );
}

export default App;
