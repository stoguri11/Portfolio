import React, { useState } from 'react';
import { Typography, AppBar, makeStyles } from '@material-ui/core';
import '../../Assets/css/Topbar.css'

/*
Application top bar
*/

const useStyles = makeStyles({
    top: {
        backgroundColor: "darkslategrey"
    }
});

export default function Topbar(props) {
    let header; // change the header text on view change
    if (props.view === 'home') {
        header = "Sam Toguri";
    } else {
        header = "Projects";
    }
    // React useState Hook to enable class state functionality in functional components
    const [text] = useState(header);
    const classes = useStyles();
    return (
        <AppBar className={classes.top} position="static">
            <Typography className={classes.text} variant='h1' align='center'>{text}</Typography>
        </AppBar>          
    );
}
