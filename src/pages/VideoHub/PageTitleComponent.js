import { Grid, Typography } from "@mui/material";


const PageTitleComponent = ({ title, titleFontSize }) => {

    const lowerCaseTitle = title.toLowerCase();
    const firstVideoIndex = lowerCaseTitle.indexOf("video");

    return (
        <Grid container direction="column" alignItems="center">
            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: { lg: `${titleFontSize}`, sm: "40pt", xs: "20pt" },
                }}
            >
                {firstVideoIndex !== -1 && (
                    <span>
                        {title.slice(0, firstVideoIndex)}
                        <span style={{ color: "#E6007E" }}>
                            {title.slice(firstVideoIndex, firstVideoIndex + 5)}
                        </span>
                        {title.slice(firstVideoIndex + 5)}
                    </span>
                )}
            </Typography>
        </Grid>
    );
};
export default PageTitleComponent
