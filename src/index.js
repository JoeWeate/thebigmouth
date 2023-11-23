import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import env_config from "./env_config";
import Home from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import Multimedia from "./pages/MultimediaPage";
import Profile from "./pages/ProfilePage";
import DummyHomePage from "./pages/DummyHomePage";
import VideoUploadPage from "./pages/VideoUpload/VideoUpload";

import Theme from "./theme";
import App from "./App";

import PostAuthentication from "./components/PostAuthentication";
import reportWebVitals from "./reportWebVitals";
import Episode from "./pages/EpisodePage";

import "./index.css";
import Dashboard from "./pages/Dashboard.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Auth0Provider
      domain={env_config.auth0.domain}
      clientId={env_config.auth0.clientId}
      authorizationParams={{
        audience: env_config.auth0.apiAudience,
        redirect_uri: window.location.origin + "/login",
      }}
    >
      <Suspense
        fallback={
          <Grid
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <CircularProgress color="primary" />
          </Grid>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<App />}>
              <Route path="" element={<Home />} />
              <Route path="/multimedia/:ID" element={<Multimedia />} />
              <Route
                path="/episode/:SeriesId/:EpisodeId"
                element={<Episode />}
              />
              <Route path="login" element={<PostAuthentication />} />
              <Route path="dummyHomePage" element={<DummyHomePage />}></Route>
              <Route path="Dashboard" element={<Dashboard />}></Route>
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Auth0Provider>
  </ThemeProvider>
);
reportWebVitals();
