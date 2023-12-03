import {Alert} from "@mui/material";
import * as React from 'react';
import SnackbarMui from '@mui/material/Snackbar';

const Snackbar = ({anchorOrigin, message, severity, open, handleClose }) => {
    return (
        <>
        <SnackbarMui
            anchorOrigin={{vertical: anchorOrigin?.vertical || 'bottom', horizontal: anchorOrigin?.horizontal || 'center'}}
            open={open}
            onClose={handleClose}
            autoHideDuration={3000}
            // message={!children && message}
            key={anchorOrigin?.vertical || 'top' + anchorOrigin?.horizontal || 'center'}
        >
            <Alert onClose={handleClose} severity={severity || 'success'} sx={{ width: '100%' }}>
                {message || "This is a success message!"}
            </Alert>
        </SnackbarMui>
        </>
    );
}

export default Snackbar;