import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid, CircularProgress } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Auth0Provider } from '@auth0/auth0-react';
import env_config from "./env_config"
import Home from './pages/Home'
import Error from './pages/Error'
import Multimedia from "./pages/Multimedia";

import Theme from './theme'
import App from './App'

import Account from './pages/Account/index'
import PostAuthentication from './pages/PostAuthentication/index'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import reportWebVitals from './reportWebVitals'
import Episode from './pages/Episode';

import './index.css'


ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Auth0Provider
      domain={env_config.auth0.domain}
      clientId={env_config.auth0.clientId}
      authorizationParams={{
        audience: env_config.auth0.apiAudience,
        redirect_uri: window.location.origin + '/login'
      }}
    >
      <Suspense fallback={<Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}><CircularProgress color='primary' /></Grid>}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<App />}>
              <Route path='' element={<Home />} />
              <Route path='/multimedia/:ID' element={<Multimedia />} />
              <Route path='/episode/:id' element={<Episode />} />
              <Route path='login' element={<PostAuthentication />} />
              <Route path='profile' element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Auth0Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
reportWebVitals()
