import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        margin: "1vw"
    }
});

export default function Comvi() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h5" component="p">
                This project is still underway as it is one of the units being taught in the second semester of my Masters degree. So far we have learnt how to use the openCV framework with the C++ language to seperate a video file into individual frames and how to perform
                basic matrix mathematics (multiplication, addition, subtraction and division). Most recently we are learning how to apply dradient filters such as the Sobel and Laplacian filters to reduce nosie in the image.
            </Typography>
        </Box>
    )
}