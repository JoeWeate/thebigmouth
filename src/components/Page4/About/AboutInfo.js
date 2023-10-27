import { Typography, Grid, Button, Collapse } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const AboutInfo = ({ description }) => {
  const [moreOpen, setMoreOpen] = useState(false);

  const toggleDescription = () => {
    setMoreOpen(!moreOpen);
  };

  const handleClick = () => {
    toggleDescription();
  };

  const handleClickUp = () => {
    toggleDescription();
  };

  return (
    <div>
      <Grid container direction="row" sx={{ width: "90%", minHeight: "20rem", marginTop: "2rem" }}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} sx={{ padding: "2rem" }}>
          <Typography sx={{ color: "white", marginLeft: "0.5rem", marginBottom: "2rem" }} variant="h3">About</Typography>
          <Typography sx={{ color: "white", marginLeft: "0.5rem" }}>
            {moreOpen ? description : description.substring(0, 300)}
          </Typography>
          {description.length > 300 && (
            <Typography
              sx={{ color: "white", padding: "0.5rem" }}
              onClick={moreOpen ? handleClickUp : handleClick}
              style={{ cursor: 'pointer' }}
            >
            </Typography>
          )}
          <Collapse in={moreOpen}>
            <Typography sx={{ color: "white", padding: "0.5rem" }}>
              {description}
            </Typography>
          </Collapse>

          {moreOpen ? (
            <Button variant="text" disableRipple onClick={handleClickUp} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0, ml: 1, mt: 3,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              Read Less<KeyboardArrowUpIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>
          ) : (
            <Button variant="text" disableRipple onClick={handleClick} sx={{
              color: "white", fontFamily: "sans-serif", padding: 0, ml: 1, mt: 3,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
              More<KeyboardArrowDownIcon sx={{ fontSize: 30, color: "white" }} />
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutInfo