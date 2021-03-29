import React from 'react';
import { Typography, makeStyles, Box } from "@material-ui/core";

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
                For my bachelors degree project I developed a sentiment analysis model that could be deployed on a web server and allow users to upload .CSV files and get sentiment analysis results on twitter data from the website.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                I employed the use of several innovative methods to achieve this. Firstly, I used GloVe word embeddings because it is an algorithm very good at assigning similar words, vectors that are near eachother in a euclidean space. This, famously, allows you to
                code things like 'Queen - Woman + Man = King'.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                Secondly, I developed a bespoke LSTM recurrent neural network using Tensorflow and Keras to make predictions on one of the 3 sentiment classes: Positive, Neutral, Negative. LSTM was used becuase it is a recurrent neural network, meaning it processes sequential
                data very well. The prime reason was that it can remember long term dependencies in text to a very high standard. Meaning that more information is considered in the prediction of the class.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                Finally, the trained, tensorflow, LSTM model was packaged and deployed into a Node.js application where users could upload CSV files to the website and receive predictions on their data in minutes.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p" id="diss">
                Please follow this <a href="#">link</a> if you would like to view my full dissertation on the subject.
            </Typography>
        </Box>
    )
}