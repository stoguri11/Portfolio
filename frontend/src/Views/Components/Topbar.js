import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, AppBar, makeStyles, Button } from '@material-ui/core';
import '../../Assets/css/Topbar.css'

/*
Application top bar
*/

const useStyles = makeStyles({
    top: {
        display: "inline-block",
        backgroundColor: "darkslategrey",
        textAlign: "center"
        },
    link: {
        textDecoration: "none",
        color: "inherit",
        display: "inline-block"
    },
    home: {
        display: "inline-block",
        float: "left",
        marginTop: "4vh",
        marginBottom: "4vh",
        marginLeft: "1vw"
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
            <Button className={classes.home} variant="contained" component={Link} to="/">Home</Button>
            <Link className={classes.link} to="/"><Typography className={classes.text} variant='h1' align='center'>{text}</Typography></Link>
        </AppBar>          
    );
}
