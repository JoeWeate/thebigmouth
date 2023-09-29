import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <Grid
      id='root'
      style={{
        paddingTop: 60,
        minHeight: 'calc(100vh - 60px)'
      }}
    >
      <NavBar />
      <main style={{ display: 'flex', flexGrow: 1, alignItems: 'flex-start'}}>
        <Outlet/>
      </main>
    </Grid>
  );
}

export default App;
