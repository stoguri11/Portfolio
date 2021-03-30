import React from 'react';
import { Link } from 'react-router-dom'
// Material-ui Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, CardHeader, IconButton } from '@material-ui/core';
// Images
import NavigateNext from '@material-ui/icons/NavigateNext';
import begin from '../../Assets/img/beginner.png'
import inter from '../../Assets/img/inter.png'
import advanced from '../../Assets/img/Advanced.webp'
import masters from '../../Assets/img/masters.png'

const useStyles = makeStyles({
    root: {
        marginTop: 0,
        marginBottom: "1vh",
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        fontSize: 50
    },
    media: {
        height: 250
    },
    button: {
        padding: 0,
        marginBottom: 0,
        marginTop: 0,
        float: 'right'
    },
    link: {
        width: "25%",
        margin: "1vw",
        textDecoration: "none"
    }
});

export default function YearCards() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Link className={classes.link} to="/projects/year4/">
                <Card className={classes.card} variant="outlined">
                    <CardActionArea>
                        <CardHeader
                            className={classes.header}
                            title="Masters Year"
                        />
                        <CardMedia
                            className={classes.media}
                            image={advanced}
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <IconButton aria-label="Navigate to Masters Projects">
                                <NavigateNext />
                            </IconButton>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
            <Link className={classes.link} to="/projects/year3/">
                <Card className={classes.root} variant="outlined">
                    <CardActionArea>
                        <CardHeader
                            title="Year 3"
                        />
                        <CardMedia
                            className={classes.media}
                            image={masters}
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <IconButton aria-label="Navigate to Year 3 Projects">
                                <NavigateNext />
                            </IconButton>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
            <Link className={classes.link} to="/projects/year2/">
                <Card className={classes.root} variant="outlined">
                    <CardActionArea>
                        <CardHeader
                            title="Year 2"
                        />
                        <CardMedia
                            className={classes.media}
                            image={inter}
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <IconButton aria-label="Navigate to Year 2 Projects">
                                <NavigateNext />
                            </IconButton>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
            <Link className={classes.link} to="/projects/year1">
                <Card className={classes.root} variant="outlined">
                    <CardActionArea>
                        <CardHeader
                            title="Year 1"
                        />
                        <CardMedia
                            className={classes.media}
                            image={begin}
                            title="Year 1"
                        />
                        <CardActions>
                            <IconButton aria-label="Navigate to Year 1 Projects">
                                <NavigateNext />
                            </IconButton>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
        </Box>
    );
}