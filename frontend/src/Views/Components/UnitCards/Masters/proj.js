import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        margin: "1vw"
    }
});

export default function Proj() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography> 
                Our masters project was set up as a group industrial project where we worked closely with industrial partners to develop for them a vehicle object detction system for use in traffic surveillance. The object detection would be accomplished
                using semantic data captured by convolutional neural networks (trafficnet) and the YOLOv4 algorithm. The technology can be used to detect traffic accidents for faster responses or in monitoring the rate of flow of traffic to reduce pollution.
            </Typography>
            <Typography>
                This project is still underway as I am yet to complete my masters degree.
            </Typography>
        </Box>
    )
}