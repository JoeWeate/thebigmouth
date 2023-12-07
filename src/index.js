import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import DashboardLayout from "./pages/Dashboard/DashbordLayout";
import DashboardPage from "./pages/Dashboard";
import env_config from "./env_config";
import Home from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import Multimedia from "./pages/MultimediaPage";
import Profile from "./pages/ProfilePage";
import {routes} from "./routes";

import Theme from "./theme";
import App from "./App";
import PostAuthentication from "./components/PostAuthentication";
import reportWebVitals from "./reportWebVitals";
import Episode from "./pages/EpisodePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import "./index.css";
import VideoHub from "./pages/VideoHub";

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
            <Route exact path={routes.home.path} element={<App />}>
              <Route index element={<Home />} />
              <Route path={routes.multimedia.path} element={<Multimedia />} />
              <Route
                path={routes.episode.path}
                element={<Episode />}
              />
              <Route path={routes.login.path} element={<PostAuthentication />} />
              <Route path={routes.videoHub.home.path} element={<VideoHub />}/>
              <Route path={routes.videoHub.videoUpload.path} element={<VideoUpload />}/>
              <Route path={routes.videoHub.profile.path} element={<Profile />} />
              <Route path={routes.dashboard.basePath} element={<DashboardLayout />}>
                  <Route path=':role/:page'  element={<DashboardPage />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Auth0Provider>
  </ThemeProvider>
);
reportWebVitals();
