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
