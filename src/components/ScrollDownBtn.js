import React, {Box} from "@mui/material";
import triangleIcon from "../assets/images/triangle-icon.svg";

const ScrollDownBtn = ({targetRef}) => {

    const handleScrollDown = (ev) => {
        ev.stopPropagation();
        window.scrollTo({
            top: targetRef.current.offsetTop,
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
                    width: "73px",
                    height: "auto",
                    position: "absolute",
                    bottom: {xs: '90px', md: '130px'},
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: "bottom 0.3s ease",
                    cursor: "pointer",
                    zIndex: "10",
                    "&:hover": {
                        bottom: {xs: '88px', md: '115px'},
                    }
                }}
                onClick={handleScrollDown}
            />
    )
};

export default ScrollDownBtn;