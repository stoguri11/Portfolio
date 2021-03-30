import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%",
        marginTop: "10%",
        justifyContent: "center"
    },
})

export default function SelectUnit() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.text} variant="h2" component="h1">Please select a unit from above</Typography>
        </Box>
    )
}