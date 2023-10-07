import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid, CircularProgress } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import Home from './pages/Home'
import Error from './pages/Error'

import Theme from './theme'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

ReactDOM.render(
    <ThemeProvider theme={Theme}>
      <Suspense fallback={<Grid container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color='primary'/></Grid>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='' element={<Home />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>,
  document.getElementById('root')
)
reportWebVitals()
