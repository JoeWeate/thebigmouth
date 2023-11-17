import React from 'react';
import { Divider as MuiDivider } from '@mui/material';

const Divider = ({sx}) =>  (
        <MuiDivider sx={{backgroundColor: "white", opacity: "0.3", ...sx}}/> );


export default Divider;