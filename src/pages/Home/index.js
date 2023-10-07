import React, { Grid, Typography } from '@mui/material'
import { TitleComponent } from '../../components/TitleComponent'
import SideBySide from '../../components/sideBySide/SideBySide'

export default function Home() {
  return (
    <>
    <Grid container style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
      
      <TitleComponent
        title="TheBigMouth"
        description=""
        />
      <Typography>This is our home page</Typography>
      <SideBySide />
      </Grid>
      </>
  )
}
