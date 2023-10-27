import { Typography, Paper, CardMedia } from "@mui/material";
import './Banner.css';
//import CrossfadeImage from "react-crossfade-image";
//< CrossfadeImage src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png" />


const defaultImage = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png";
const defaultTitle = "The Big Mouth";
const defaultBackgroundImageUrl = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/banner.png";

const Banner = (props) => {
    const {src = defaultImage, title = defaultTitle, backgroundImageUrl = defaultBackgroundImageUrl} = props;
    return (
        <Paper style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "90vh",
            width: "100%",
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0",
        }}>
            <div className="logo-text">

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
                        fontFamily: 'Arial',
                        backgroundColor: "rgba(224,3,146, 0.6)",
                        color: 'white',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        fontSize: {
                            xs: '2.5rem',
                            sm: '5rem',
                            md: '5rem',
                            lg: '6rem',
                            xl: '6rem',
                        },
                    }}
                >
                    {title}
                </Typography>

            </div>

            <img alt="triangle" src="/triangle-icon.png" width="40" height="30" className="triangle" />

        </Paper >

    )
}

export default Banner