import React, { Grid, Typography } from "@mui/material";
import { useEffect, useState } from 'react'
import { TitleComponent } from "../../components/TitleComponent";
import VideoBanner from "../../components/VideoBanner";import SideBySide from "../../components/sideBySide/SideBySide"

export default function Home() {
  const [message, setMessage] = useState('')

  // useEffect(()=>{
  //   getHelloWorld().then((msg) => {
  //     setMessage(msg)
  // })
  // },[])

  return (
    <Grid
      container
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <TitleComponent title="TheBigMouth" description="" />
      <Typography>This is our home page</Typography>
      <VideoBanner />
    </Grid>
  )
}


