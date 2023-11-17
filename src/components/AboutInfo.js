import { Typography, Grid, Button, Collapse } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import SectionContent from "./SectionContent";
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
      <SectionContent targetRef={targetRef} sx={{my: {xs: 9, md: 11}, marginLeft: "0.5rem" }}>
        <Grid item xs={0} md={6} ></Grid>
        <Grid item xs={12} md={6} >
          <SectionTitle uppercase title="About"/>
          <Typography sx={{ color: "white", }}>{episode}</Typography>
          <Collapse in={moreOpen}>
            <Typography sx={{ color: "white"}}>
              <p>{episode}</p>
            </Typography>
          </Collapse>

          {moreOpen ?
            (<Button variant="text" disableRipple onClick={handleClickUp} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              less<KeyboardArrowUpIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>)
            :
            (<Button variant="text" disableRipple onClick={handleClick} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0, mt: 2,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              more<KeyboardArrowDownIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>
            )}

        </Grid>

      </SectionContent>
  )
}

export default AboutInfo