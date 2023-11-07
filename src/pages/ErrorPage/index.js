import React, { Grid, Typography } from '@mui/material'
import { TitleComponent } from '../../components/TitleComponent'

export default function ErrorPage() {
  return (
    <Grid container style={{margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 100}}>
      <TitleComponent
        title="TheBigMouth"
        description=""
        />
        <Typography>You found a page that doesn't exist!</Typography>
    </Grid>
  )
}
