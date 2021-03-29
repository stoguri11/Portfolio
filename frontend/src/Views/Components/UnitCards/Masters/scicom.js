import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root:  {
        margin: "1vw"
    },
    text: {

    }
});

export default function Scicom() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.text} variant="h5" component="p">
                This unit is also still underway and so have not completed the coursework for it yet. However, we are currently being taught how to apply Fourier Transforms in a number of different scenarios. For example, in audio processing 1D Fourier Transforms
                can be used to decompose the audio singal into its fundamental components and then filter out certain frequencies. Another usage we have been taught and implemented is CT scan imaging. If you are converting the X-Ray signal gathered from the CT
                scan into a usable image the most popular way of achieving this is with 2 Dimensional Fourier Transforms. A sinusoid is created from the X-Ray signal and Fourier Transform is applied to the sinusoid. Now, we can apply filters such as Ramp or Cosine
                filters to remove nosie and produce a clear, non-blurred image of a brain.
            </Typography>
        </Box>
    )
}