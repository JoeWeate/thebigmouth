import { Typography, Paper, CardMedia, Box } from "@mui/material";
import triangleIcon from "../../assets/images/triangle-icon.svg";

const defaultImage = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png";
const defaultTitle = "THE BIG MOUTH";
const defaultBackgroundImageUrl = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/banner.png";



const Banner = (props) => {
    const { src = defaultImage, title = defaultTitle, backgroundImageUrl = defaultBackgroundImageUrl } = props;

    return (
        <Paper sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "95vh",
            width: "100%",
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 0,
        }}>
            <Box sx={{
                position: "absolute",
                width: "100%",
                height: "80%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
            }}>

                <CardMedia component="img" src={src} alt={title} sx={{
                    alignSelf: "center",
                    width: {
                        xs: '12rem',
                        sm: '20rem',
                        md: '22rem',
                        lg: '25rem',
                    }
                }} >
                </CardMedia>
                <Typography
                    variant="h1"
                    sx={{
                        position: "absolute",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        backgroundColor: "rgba(224,3,146, 0.6)",
                        color: "white",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                        fontSize: {
                            xs: "2.3rem",
                            sm: "4.5rem",
                            md: "4.5rem",
                            lg: "6rem",
                            xl: "6rem",
                        },
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <img
                alt="triangle"
                src={triangleIcon}

                style={{
                    width: "63px",
                    height: "66px",
                    position: "absolute",
                    alignSelf: "flex-end",
                    marginBottom: "3rem",
                    transition: "margin-bottom 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.marginBottom = "2rem";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.marginBottom = "3rem";
                }}
            />


        </Paper >
    )
};

export default Banner