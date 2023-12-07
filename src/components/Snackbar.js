import { Alert } from "@mui/material";
import * as React from 'react';
import SnackbarMui from '@mui/material/Snackbar';

const Snackbar = ({message, severity, open, handleClose }) => {
    return (
        <SnackbarMui
            sx={{"&.MuiSnackbar-root": {top: "100px"}}}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            onClose={handleClose}
            autoHideDuration={null}
            // message={!children && message}
            key={'top' + 'center'}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </SnackbarMui>
    );
}
export default Snackbar;