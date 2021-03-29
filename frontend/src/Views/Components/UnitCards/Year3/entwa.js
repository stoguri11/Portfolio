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
            <Typography className={classes.para} variant="h5" component="h2">
                This unit did not involve any coursework, it was exam based, so there is no report to show you.
            </Typography>
            <Typography className={classes.para} variant="h5" component="h2">
                Firstly we were taught about different automatons such as Turing Machines and Markov Chains and how to create versions of these machines to solve certain problems. For example, we created Turing Machines that would do all basic maths operations and ones
                that would do text processing tasks such as remove third consecutive letters in a row.
            </Typography>
            <Typography className={classes.para} variant="h5" component="h2">
                Finally, we were taught set theory and the meanings of NP, NP-Hard and Polynomial time comlpexities. We, were taught how to measure time complexity and why certain, seemingly simple, problems are in NP or NP-Hard time complexity.
            </Typography>
        </Box>
    )
}