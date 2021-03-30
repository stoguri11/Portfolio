import React from 'react';
import { Typography, makeStyles, Box } from "@material-ui/core";
import dsas from '../../../../Assets/reports/dsas.pdf';

const useStyles = makeStyles({
    root: {
        jsutifyContent: "center"
    },
    para: {
        display: "block",
        margin: "1.5vw"
    }
});

export default function Robotics() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.para} variant="h5" component="p">
                The first half of this unit focused heavily on elements of cloud computing and EDGE computing with the second half of the unit focusing more on internet security, including authentication and immutability.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                The coursework task for this project was to produce a poster outlining a development project. My chosen deveelopment project was to find an optimal computational offloading strategy for devices communicating with an EDGE server. To do this I used the
                OMNET++ netowrk simulator and the C++ language to create a rudmentary simulation of a device talking to an EDGE server. I timed all interactions and used a variety of different computation offloading strategies and compared the results.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                The full report can be found <a href={dsas} target="_blank" rel="noreferrer">here</a>
            </Typography>
        </Box>
    )
}