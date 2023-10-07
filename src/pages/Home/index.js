import React, { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { TitleComponent } from '../../components/TitleComponent'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(()=>{
    getHelloWorld().then((msg) => {
      setMessage(msg)
  })
  },[])

  return (
    <>
    <Grid container style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
      
      <TitleComponent
        title="TheBigMouth"
        description=""
        />
        <Typography>This is our home page</Typography>
    </Grid>
  )
}





/*
S3 Example
  <img
    src={`https://${env_config.s3.BUCKET}.s3.amazonaws.com/public/big-mouth.png`}
    style={{width: 250, height: 250}}
    />
*/