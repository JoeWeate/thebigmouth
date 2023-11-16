import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import '../assets/styles/helper.css';
import JumpingWords from './TextStyles/JumpingWords';
import GraffitiText from './TextStyles/GraffitiText';
import InLineText from './TextStyles/InLineText';

export default function MediaCard({ sectionTitle, multimediaData }) {
  return (
    <Grid container sx={{ pb: 4, flexDirection: 'column' }} lg={12} >
      <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white', pb: 1 }}>{sectionTitle}
      </Typography>

      <Grid container className="noscroll" mt="1.5rem" sx={{ display: 'flex', direction: 'row', flexWrap: 'nowrap', overflowX: 'auto' }}>

        {multimediaData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ pr: 3, width: '100%', flex: "auto 0 0" }}>

            <Link to={`/multimedia/${item.ID}`}>
              <Box sx={{ position: "relative" }}>
                <img
                  style={{ width: "100%", borderRadius: "0.5rem", position: "relative" }}
                  src={item.Images}
                  alt={`Image ${item.Name}`}
                />
                <Box
                  sx={{
                    background: "#E6007E",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    borderRadius: "0.5rem",
                    transition: "opacity 0.3s ease",
                    ":hover": {
                      opacity: "0.7",
                    },
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: "2.4rem",
                    position: "absolute",
                    top: "35%",
                    left: "12%",
                    textAlign: "left",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  {item.TitleStyle === "Inline" ? (
                    <InLineText title={item.Name} />
                  ) : item.TitleStyle === "Graffiti" ? (
                    <GraffitiText title={item.Name} />
                  ) : item.TitleStyle === "JumpingWords" ? (
                    <JumpingWords title={item.Name} />
                  ) : <p>{item.Name}</p>}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}


