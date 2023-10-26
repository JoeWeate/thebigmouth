import { Typography, Grid, Button, Collapse } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const AboutInfo = () => {
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
          <Typography sx={{ color: "white", marginLeft: "0.5rem" }}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis enim vitae lacus semper, in porta quam imperdiet. Phasellus in libero nisl. Aliquam in dictum enim. Aliquam quam neque, finibus vitae elementum vitae, malesuada eu odio. Nam aliquam, massa non consequat maximus, lorem enim posuere lectus, id finibus magna libero quis libero. </p></Typography>
          <Collapse in={moreOpen}>
            <Typography sx={{ color: "white", padding: "0.5rem" }}>
              <p>Pellentesque condimentum scelerisque accumsan. Nam dignissim diam sit amet risus auctor, vitae molestie leo fringilla. Proin sed nisl pulvinar, porta dui et, pharetra augue. Proin eget quam augue. Etiam sit amet erat turpis. Phasellus leo dolor, auctor a sagittis ac, vehicula non tortor. Nam aliquam, massa non consequat maximus, lorem enim posuere lectus, id finibus magna libero quis libero. Pellentesque condimentum scelerisque accumsan. Nam dignissim diam sit amet risus auctor, vitae molestie leo fringilla. </p>
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