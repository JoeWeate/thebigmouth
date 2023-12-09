import {Typography} from "@mui/material";
import React from "react";

const EmptyState = ({children}) => (<Typography sx={{color: "white"}} variant="h5" component='p'>{children}</Typography>)

export default EmptyState;
