import { Typography, Grid, Button, Collapse } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const AboutInfo = ({ episode }) => {
  const [moreOpen, setMoreOpen] = useState(false);

  const handleClick = () => {
    setMoreOpen(true)
  }

  const handleClickUp = () => {
    setMoreOpen(false)
  }
  return (
    <div>
      <Grid container direction="row" sx={{ width: "90%", marginTop: "2rem" }}>
        <Grid item xs={6} ></Grid>
        <Grid item xs={6} sx={{ padding: "2rem" }}>
          <Typography sx={{ color: "white", marginLeft: "0.5rem" }}><h3>About</h3></Typography>
          <Typography sx={{ color: "white", marginLeft: "0.5rem" }}><p>{episode.description} </p></Typography>
          <Collapse in={moreOpen}>
            <Typography sx={{ color: "white", padding: "0.5rem" }}>
              <p>{episode.description}</p>
            </Typography>
          </Collapse>

          {moreOpen ?
            (<Button variant="text" disableRipple onClick={handleClickUp} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0, ml: 1,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              less<KeyboardArrowUpIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>)
            :
            (<Button variant="text" disableRipple onClick={handleClick} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0, ml: 1,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              more<KeyboardArrowDownIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>
            )}

        </Grid>

      </Grid>

    </div >
  )
}

export default AboutInfo