import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Box, makeStyles, ButtonGroup, Button } from '@material-ui/core';
import SelectUnit from './SelectUnit';
import Adta from './Masters/adta';
import Comvi from './Masters/comvi';
import PP from './Masters/PP';
import Proj from './Masters/proj';
import Scicom from './Masters/scicom';

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

export default function Year2() {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <ButtonGroup className={classes.group} variant="contained" aria-label="contained primary button group">
                <Link className={classes.link} to="/projects/year4/adta"><Button className={classes.button}>Advanced Programming Concepts</Button></Link>
                <Link className={classes.link} to="/projects/year4/scicom"><Button className={classes.button}>Data and Algorithms</Button></Link>
                <Link className={classes.link} to="/projects/year4/pp"><Button className={classes.button}>Parallel Programming</Button></Link>
                <Link className={classes.link} to="/projects/year4/comvi"><Button className={classes.button}>OS and Netowrking</Button></Link>
                <Link className={classes.link} to="/projects/year4/grip"><Button className={classes.button}>Software Engineering</Button></Link>
                <Link className={classes.link} to="/projects/year4/grip"><Button className={classes.button}>Web Programming</Button></Link>
            </ButtonGroup>
            <Switch>
                <Route path="/projects/year4" component={SelectUnit} exact />
                <Route path="/projects/year4/adta" component={Adta} />
                <Route path="/projects/year4/comvi" component={Comvi} />
                <Route path="/projects/year4/pp" component={PP} />
                <Route path="/projects/year4/proj" component={Proj} />
                <Route path="/projects/year4/scicom" component={Scicom} />
            </Switch>
        </Box>
    )
}
