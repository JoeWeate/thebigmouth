import { Button, Divider, Typography, Collapse } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./Information.css"
import theme from "../../theme";
import { useState } from "react";


const Information = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClickUp = () => {
        setOpen(false);
    }

    return (
        <diV className="info-wrapper">
            <Divider sx={{ backgroundColor: "white" }} ></Divider>
            <div className="info-container">
                <Typography typography={theme.typography.h5} classname="info" sx={{ color: "white" }}>
                    <p>INFORMATION</p>
                </Typography>
                {open ?
                    (<Button className="button-2" variant="text" disableRipple onClick={handleClickUp} sx={{
                        ml: 1,
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent"
                        }
                    }}>
                        <KeyboardArrowUpIcon sx={{ fontSize: 40, color: "white" }} />
                    </Button>
                    ) : (
                        <Button className="button-2" variant="text" disableRipple onClick={handleClick} sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}>
                            <KeyboardArrowDownIcon sx={{ fontSize: 40, color: "white" }} />
                        </Button>
                    )}
            </div>
            <Collapse in={open}>
                <div className="item">
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                        <p>Released</p>
                    </Typography>
                    <Typography sx={{ fontSize: 14, marginTop: "-1.5rem", color: "white" }}>
                        <p>2015</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                        <p>Rated</p>
                    </Typography>
                    <Typography sx={{ fontSize: 14, marginTop: "-1.5rem", color: "white" }}>
                        <p>15</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                        <p>Region of Origin</p>
                    </Typography>
                    <Typography sx={{ fontSize: 14, marginTop: "-1.5rem", color: "white" }}>
                        <p>United Kingdom</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                        <p>Original Audio</p>
                    </Typography>
                    <Typography sx={{ fontSize: 14, marginTop: "-1.5rem", color: "white" }}>
                        <p>English</p>
                    </Typography>
                </div>


            </Collapse>
            <Divider sx={{ marginBottom: "1rem", backgroundColor: "white" }}></Divider>
        </diV >


    )
}

export default Information