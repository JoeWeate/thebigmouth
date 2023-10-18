import React, { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { TitleComponent } from '../../components/TitleComponent'
import SideBySide from "../../components/sideBySide/SideBySide"

export default function Home() {
  const [message, setMessage] = useState('')

  // useEffect(()=>{
  //   getHelloWorld().then((msg) => {
  //     setMessage(msg)
  // })
  // },[])

  return (
  
    <Grid container >
      
      <TitleComponent
        title="TheBigMouth"
        description=""
        />
        <SideBySide/>
    </Grid>
  
  )
}


