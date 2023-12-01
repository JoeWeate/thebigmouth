
import { Grid, Typography } from "@mui/material";

const PageTitleComponent = ({ title, fontSize }) => {
    const { mainTitle, subtitle } = title;
    const { titleFontSize, subtitleFontSize } = fontSize;

    const lowerCaseTitle = mainTitle.toLowerCase();
    const firstVideoIndex = lowerCaseTitle.indexOf("video");

    return (
        <Grid container direction="column" alignItems="center">
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: { lg: `${titleFontSize}`, sm: "40pt", xs: "20pt" },
                }}
            >
                {firstVideoIndex !== -1 && (
                    <span>
                        {mainTitle.slice(0, firstVideoIndex)}
                        <span style={{ color: "#E6007E" }}>
                            {mainTitle.slice(firstVideoIndex, firstVideoIndex + 5)}
                        </span>
                        {mainTitle.slice(firstVideoIndex + 5)}
                    </span>
                )}
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "13pt", sm: "18pt", lg: `${subtitleFontSize}` },
                    marginTop: 0,
                    marginBottom: { xs: "2rem", lg: "4rem" },
                }}
            >
                {subtitle}
            </Typography>


        </Grid>
    );
};

export default PageTitleComponent;
