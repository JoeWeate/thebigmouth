import { Typography, Grid, Button, Collapse } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const AboutInfo = ({ episode, targetRef }) => {
  const [moreOpen, setMoreOpen] = useState(false);

  const handleClick = () => {
    setMoreOpen(true)
  }

  const handleClickUp = () => {
    setMoreOpen(false)
  }
  return (
    <div>
      <Grid container direction="row" sx={{ width: "90%", marginTop: "2rem" }} ref={targetRef}>
        <Grid item xs={6} ></Grid>
        <Grid item xs={6} sx={{ padding: "2rem" }}>
          <SectionTitle uppercase title="About"/>
          <Typography sx={{ color: "white", marginLeft: "0.5rem" }}>{episode}</Typography>
          <Collapse in={moreOpen}>
            <Typography sx={{ color: "white", padding: "0.5rem" }}>
              <p>{episode}</p>
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