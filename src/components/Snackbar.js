import { Alert } from "@mui/material";
import * as React from 'react';
import SnackbarMui from '@mui/material/Snackbar';

const Snackbar = ({message, type, open, handleClose }) => {

    return (
        <>
        {open ? (
            <SnackbarMui
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            onClose={handleClose}
            autoHideDuration={6000}
            key={'top' + 'center'}
        >
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </SnackbarMui>) : null}
        </>
    );
}
export default Snackbar;