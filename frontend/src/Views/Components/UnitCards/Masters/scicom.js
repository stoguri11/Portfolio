import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import lbm from '../../../../Assets/vid/lbm.mp4';
import exca from '../../../../Assets/vid/ExcitableCA.mp4';


const useStyles = makeStyles({
    root: {
        margin: "1vw",
        textAlign: "center"
    },
    row: {
        display: "flex",
        direction: "row",
        textAlign: "left"
    },
    card: {
        margin: "1vh 1vw",
        width: "50%"
    },
    media: {
        height: "auto",
        width: "100%"
    },
    media_large: {
        width: "auto"
    }
});

export default function Scicom() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h3" component="h1">
                Scientific Computing and Simulation
            </Typography>
            <Box className={classes.row}>
                <Card className={classes.card} raised={true}>
                    <CardHeader
                        title="Lattice Boltzmann Model"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="video"
                            src={lbm}
                            autoPlay
                            loop
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                An Evolution of FHP this simulation models the density distribution of particles in the fluid, not individual particles as in FHP. Red regions show high velocity, blue regions show low velocity
                                The direction of the arms shows the exact direction of fluid travel and the length of the arm shows 
                                exactly how large or small the flow rate is.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.card} raised={true}>
                    <CardHeader
                        title="FHP Lattice Gas Automaton"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="video"
                            
                            autoPlay
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                FHP is an 7 state (Velocity) Lattice Gas Automaton that can be used to model how the particles in fluid collide and interact
                                with eachother. It accurately models the Navier-Stokes equations of fluid dynamics and is the precursor to the more advanced and 
                                widely used Lattice Boltzmann Models. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box className={classes.row}>
                <Card className={classes.card} raised={true}>
                    <CardHeader
                        title="Excitable Cellular Automata"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media_large}
                            component="video"
                            src={exca}
                            autoPlay
                            loop
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Excitable Cellular Automaton, like the 4 state CA above, can be used to model phenomena that involves the propogation of a wave.
                                This includes the Cardiac Potential of a heart, a radio signal or any other scenario that spread outwards like a wave.  
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.card} raised={true}>
                    <CardHeader
                        title="Lattice Boltzmann Model"
                    />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="video"
                            
                            autoPlay
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                A simulation that models the way fluids flow around objects. Red regions show high velocity, blue regions show low velocity
                                The direction of the arms shows the exact direction of fluid travel and the length of the arm shows 
                                exactly how large or small the flow rate is.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    )
}