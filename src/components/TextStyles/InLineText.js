import { Typography } from "@mui/material"

const InLineText = ({ title }) => {
    return (
        <Typography sx={{ wordSpacing: "-0.2rem", fontWeight: 600, fontSize: { lg: "40pt", md: "30pt", xs: "40pt" }, marginTop: 0 }}>
            {title}
        </Typography>
    )
}

export default InLineText