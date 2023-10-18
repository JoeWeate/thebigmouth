import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Banner from './components/Banner/Banner';

function App() {
  return (
    <Grid container display="flex" flexDirection="column"
      id='root'
      style={{
        paddingTop: 60,
        minHeight: 'calc(100vh - 60px)'
      }}
    >
      <NavBar />
      <Banner />
      <main style={{ display: 'flex', flexGrow: 1, alignItems: 'flex-start' }}>
        <Outlet />
      </main>

    </Grid>
  );
}

export default App;
