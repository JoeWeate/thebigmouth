import { Typography, Paper, CardMedia } from "@mui/material";
import './Banner.css';


const Banner = () => {
    return (
        <Paper style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "90vh",
            width: "100%",
            backgroundImage: "url(https://i.pinimg.com/564x/21/a6/77/21a677df3097bbf8023084f2baad539e.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0",
        }}>
            <img alt="Image1" src="/istockphoto-1399763427-612x612.png" style={{ maxHeight: "90vh", height: "80vh", alignItems: "center" }} />
            <CardMedia component="img" src="/BigMouth.png" sx={{
                position: "absolute",
                alignSelf: "center",
                // marginBottom: {
                //     xs: '15rem',
                //     sm: '15rem',
                //     md: '4rem',
                //     lg: '10rem',
                // },
                width: {
                    xs: '12rem',
                    sm: '15rem',
                    md: '15rem',
                    lg: '18rem',
                }
            }} ></CardMedia>
            <Typography
                variant="h1"
                sx={{
                    position: "absolute",

                    marginBottom: {
                        xs: '22rem',
                        sm: '23rem',
                        md: '12rem',
                        lg: '10rem',
                        xl: '8rem',
                    },
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
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
                THE BIG MOUTH
            </Typography>
            <img alt="triangle" src="/triangle-icon.png" width="40" height="30" className="triangle" />

        </Paper >

    )
}

export default Banner