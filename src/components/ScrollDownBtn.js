import React, {Box} from "@mui/material";
import triangleIcon from "../assets/images/triangle-icon.svg";

const ScrollDownBtn = ({targetRef, sx}) => {

    const handleScrollDown = (ev) => {
        ev.stopPropagation();
        window.scrollTo({
            top: targetRef.current.offsetTop - 60,
            behavior: 'smooth',
        });
    };

    return (
        <Box
        comsponent='div'
        sx={{
            display: "block",
            width: "70px",
            height: "70px",
            position: "absolute",
            bottom: {xs: '20px', md: '60px'},
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: "100",
            paddingTop: 0,
            "&:hover img": {
                transform: "translateY(10px)"
        },
            ...sx
        }}
            onClick={handleScrollDown}
        >
            <Box
                component="img"
                alt="triangle"
                src={triangleIcon}
                sx={{
                    position: "relative",
                    top: 0,
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                    transition: "all 0.2s linear",
                }}
            />
        </Box>
    )
};

export default ScrollDownBtn;