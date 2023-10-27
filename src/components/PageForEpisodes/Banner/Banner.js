import { Typography, Paper } from "@mui/material";
import triangleIcon from "../../assets/images/triangle-icon.svg";
import "./Banner.css";

export default function Banner() {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "90vh",
        width: "100%",
        backgroundImage:
          "url(https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0",
        position: "relative",
      }}
    >
      <div className="logo-text">
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontFamily: "Arial",
            color: "white",
            textAlign: "left",
            whiteSpace: "nowrap",
            fontSize: {
              xs: "2.5rem",
              sm: "5rem",
              md: "5rem",
              lg: "6rem",
              xl: "6rem",
            },
            left: "15%", // Adjust the left position as needed
            transform: "translateY(-50%)",
          }}
        >
          TVshow title
        </Typography>
      </div>

      <img
        alt="triangle"
        src={triangleIcon}
        width="40"
        height="30"
        className="triangle"
      />
    </Paper>
  );
}
