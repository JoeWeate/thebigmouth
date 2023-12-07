import { Alert } from "@mui/material";
import * as React from 'react';
import SnackbarMui from '@mui/material/Snackbar';

const Snackbar = ({message, severity, open, handleClose }) => {
    return (
        <SnackbarMui
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
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