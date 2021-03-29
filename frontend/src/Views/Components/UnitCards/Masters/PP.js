import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    text: {
        margin: "1vw"
    }
});

export default function PP() {

    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.text} variant="h5" component="p">
                This unit focused very heavily on MPI to perform parallel computations and touched on GPU parallelism towards the end of the term.
            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
                For this unit I implemented an MPI Task Farm to perform the computations of a Prime Number Sieve on a distributed memory system. The system that was being used was the Universities own Hadoop Cluster of 12 computing nodes. Furthermore, the MPJ Express
                framework was used to implement MPI programs in the Java programming language. Prime number sieves are functions that find all prime numbers upo to a given value.
            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
                The method of parallelisation that I chose had several advantages; Its very scalable and requires very little, if any, changes to the code to have this running on 100's or even 1000's of different machienes and It did achieve a parallel speedup, even
                for such a simple problem. However, I learnt that parllelisation of programs is highly suited to problems with huge sizes and not so much small problems. So, in my example parallel speedup was not achieved until searching for all primes
                less than a million. Upwards of 1 million and the speedup will continue to grow.
            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
                The full report, which documents all of the lab work that was conducted thorugh out the unit as well, can be found at this <a href="#" id="pp">link</a>.
            </Typography>
        </Box>
    )
}