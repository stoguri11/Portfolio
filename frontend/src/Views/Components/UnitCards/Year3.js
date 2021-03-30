import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Box, makeStyles, ButtonGroup, Button } from '@material-ui/core';
import SelectUnit from './SelectUnit';
import Entwa from './Year3/entwa';
import Dsas from './Year3/dsas';
import Robotics from './Year3/robotics';
import Proj from './Year3/proj';
import Theocs from './Year3/theocs';

const useStyles = makeStyles({
    welcome: {
        marginTop: "47vh",
        MarginLeft: "47%"
    },
    root: {

    },
    group: {
        margin: "1vw",
        width: "98vw",
        textAlign: "center",
    },
    link: {
        width: "20%",
        textDecoration: "none"
    },
    button: {
        width: "100%",
        backgroundColor: "darkslategrey",
        color: "white"
    }

});

export default function Year3() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <ButtonGroup className={classes.group} variant="contained" aria-label="contained primary button group">
                <Link className={classes.link} to="/projects/year3/proj"><Button className={classes.button}>Bachelors Project</Button></Link>
                <Link className={classes.link} to="/projects/year3/entwa"><Button className={classes.button}>Enterprise Web Architectures</Button></Link>
                <Link className={classes.link} to="/projects/year3/dsas"><Button className={classes.button}>Distributed Systems and Security</Button></Link>
                <Link className={classes.link} to="/projects/year3/robotics"><Button className={classes.button}>Robotics</Button></Link>
                <Link className={classes.link} to="/projects/year3/theocs"><Button className={classes.button}>Theoretical Computer Science</Button></Link>
            </ButtonGroup>
            <Switch>
                <Route path="/projects/year3" component={SelectUnit} exact />
                <Route path="/projects/year3/proj" component={Proj} />
                <Route path="/projects/year3/entwa" component={Entwa} />
                <Route path="/projects/year3/dsas" component={Dsas} />
                <Route path="/projects/year3/robotics" component={Robotics} />
                <Route path="/projects/year3/theocs" component={Theocs} />
            </Switch>
        </Box>
    )
}
