import {Button, Divider, Typography, Collapse} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Information.css';
import {useState} from 'react';

const Information = ({released, rated, regionOfOrigin, originalAudio}) => {
    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickUp = () => {
        setOpen(false);
    };

    return (
        <div className="info-wrapper">
            <Divider sx={
                {backgroundColor: 'white'}
            }></Divider>
            <div className="info-container">
                <Typography className="info"
                    sx={
                        {color: 'black'}
                }>
                    <p>INFORMATION</p>
                </Typography>
                {
                !rated && setDisable(true)
            }
                {
                open ? (
                    <Button className="button-2" variant="text" disableRipple
                        onClick={handleClickUp}
                        sx={
                            {ml: 1}
                    }>
                        <KeyboardArrowUpIcon sx={
                            {
                                fontSize: 40,
                                color: 'white'
                            }
                        }/>
                    </Button>
                ) : (
                    <Button disable={
                            disable ? true : undefined
                        }
                        className="button-2"
                        variant="text"
                        disableRipple
                        onClick={handleClick}
                        sx={
                            {ml: 1}
                    }>
                        <KeyboardArrowDownIcon sx={
                            {
                                fontSize: 40,
                                color: 'white'
                            }
                        }/>
                    </Button>
                )
            } </div>
            <Collapse in={open}>
                <div className="item">
                    <Typography sx={
                        {
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'white'
                        }
                    }>
                    </Typography>
                    <Typography sx={
                        {
                            fontSize: 14,
                            marginTop: '-1.5rem',
                            color: 'white'
                        }
                    }>
                        <p> Released {released}</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={
                        {
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'white'
                        }
                    }>
                    </Typography>
                    <Typography sx={
                        {
                            fontSize: 14,
                            marginTop: '-1.5rem',
                            color: 'white'
                        }
                    }>
                        <p>Rated {rated}</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={
                        {
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'white'
                        }
                    }>
                    </Typography>
                    <Typography sx={
                        {
                            fontSize: 14,
                            marginTop: '-1.5rem',
                            color: 'white'
                        }
                    }>
                        <p>Region of Origin {regionOfOrigin}</p>
                    </Typography>
                </div>
                <div className="item">
                    <Typography sx={
                        {
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'white'
                        }
                    }>
                    </Typography>
                    <Typography sx={
                        {
                            fontSize: 14,
                            marginTop: '-1.5rem',
                            color: 'white'
                        }
                    }>
                        <p>Original Audio {originalAudio}</p>
                    </Typography>
                </div>
            </Collapse>
            <Divider sx={
                {
                    marginBottom: '1rem',
                    backgroundColor: 'white'
                }
            }></Divider>
        </div>
    );
};

export default Information;
