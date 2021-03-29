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

export default function Adta() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.para} variant="h5" component="p">
                This unit taught students how to go about analysing large datasets using a plethora of graphs, algorithms and techniques to gain insight that is new, valuable and useful. It also taught us about machine learning algoriths and using them for classification
                problems.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                To analyse data we learnt how to interpret all sorts of graphs such as box plots, histograms, dendograms and many more. We were also taught how to cluster data to find the natural classes in the dataset and to interpret why clusters have formed. This
                was done using several algorithms including; K-Means, K-Nearest Neighbour, Hierarchical Distance Clustering and more. Furthermore, we gained experience with data mining techniques such as association rule mining.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                We were taught about many different classification algorithms from various areas of research. For example, Naive Bayes and Support Vector Machines are more traditional machine learning approaches but we also explored some state-of-the-art deep learning
                solutions using neural networks.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                The coursework for this unit was to perform an analysis of reviews taken from IMDb, trying to find insights into the data, and then to to perform sentiment analysis using several algorithms and compare the results. I used Doc2Vec word embeddings and an
                LSTM RNN like in my Bachelors Project. I did this because LSTMs are proven to perform exceptionally well with temporal data such as text.
            </Typography>
            <Typography className={classes.para} variant="h5" component="p">
                The full report can be read <a href="#" target="_blank">Here</a>.
            </Typography>
        </Box>
    )
}