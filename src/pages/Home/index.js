import React, { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { TitleComponent } from '../../components/TitleComponent'
import { getHelloWorld, getHelloWorldByName } from '../../hooks/API/helloworld'
import env_config from '../../env_config'
import { useAuth0 } from "@auth0/auth0-react"

export default function Home() {
  const [message, setMessage] = useState('')
  const { user, isLoading } = useAuth0();

  useEffect(()=>{
    getHelloWorld().then((msg) => {
      setMessage(msg)
  })
  },[])

  useEffect(()=>{
    if(!isLoading && user){
        getHelloWorldByName(user.nickname).then((msg) => {
          setMessage(msg)
      })
    }
  },[isLoading, user])

  return (
    <Grid container style={{margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 100}}>
      <TitleComponent
        title="TheBigMouth"
        description=""
        />
        <Typography>This is our home page</Typography>
        <Typography variant='h5'>{message}</Typography>
        <img
          src={`https://${env_config.s3.BUCKET}.s3.amazonaws.com/public/big-mouth.png`}
          style={{width: 250, height: 250}}
          />
    </Grid>
  )
}

