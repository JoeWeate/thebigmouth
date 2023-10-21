import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import prod_config from "./env_config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Profile from "./pages/UsersProfile/Profile";
import Theme from "./theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <Auth0Provider
    domain={prod_config.auth0.domain}
    clientId={prod_config.auth0.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ThemeProvider theme={Theme}>
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
            <Route path="/" element={<App />}>
              <Route path="" element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/user" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
reportWebVitals();
