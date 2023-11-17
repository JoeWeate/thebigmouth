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
                component="img"
                alt="triangle"
                src={triangleIcon}
                sx={{
                    display: "block",
                    width: "70px",
                    height: "auto",
                    position: "absolute",
                    bottom: {xs: '20px', md: '60px'},
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: "bottom 0.3s ease",
                    cursor: "pointer",
                    zIndex: "10",
                    "&:hover": {
                        bottom: {xs: '10px', md: '40px'},
                    },
                    ...sx
                }}
                onClick={handleScrollDown}
            />
    )
};

export default ScrollDownBtn;