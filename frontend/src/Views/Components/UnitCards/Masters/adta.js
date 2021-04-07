import React from 'react';
import { Typography, makeStyles, Box, Paper } from "@material-ui/core";
import adta from '../../../../Assets/reports/adta.pdf';
import lstm from '../../../../Assets/img/knime-lstm.PNG';
import clustering from '../../../../Assets/img/knime-clustering.PNG';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    title: {

    },
    content: {
        display:"flex",
        flexDirection: "row",
        textAlign: "left"
    },
    paper: {

        margin: "1vw"
    },
    para: {
        display: "block",
        margin: "1.5vw"
    },
    img: {
        margin: "1vw",

    }
});

export default function Adta() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="h3" component="h1">
                Applied Data and Text Analytics
            </Typography>
            <Box className={classes.content}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography className={classes.para} variant="h5" component="p">
                        This unit taught students how to go about analysing large datasets using a plethora of graphs, algorithms and techniques to gain insight that is new, valuable and useful. It also taught us about machine learning algoriths and using them for classification
                        problems. All the work for this unit was done using Knime Data Science platform which allows users to use a wide variety of provided tools and algorithms to find new and intersting insight in their data.
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
                        The full report can be read <a href={adta} target="_blank" rel="noreferrer">here</a>
                    </Typography>
                </Paper>
                <Box className={classes.img}>
                    <img src={lstm} alt="Knime Data Science Platform" />
                    <img src={clustering} alt="Knime Data Science Platform" />
                </Box>
            </Box>
        </Box>
    )
}