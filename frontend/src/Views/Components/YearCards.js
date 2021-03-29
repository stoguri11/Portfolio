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
import { Box } from '@material-ui/core';
// Images
import NavigateNext from '@material-ui/icons/NavigateNext';
import begin from '../../Assets/img/beginner.png'
import inter from '../../Assets/img/inter.png'
import advanced from '../../Assets/img/Advanced.webp'
import masters from '../../Assets/img/masters.png'

const useStyles = makeStyles({
    wrapper: {
        marginTop: 0,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    root: {
        width: "25vw",
        margin: "1vw"
    },
    media: {
        height: 250
    },
    text: {
        height: 10
    },
    button: {
        padding: 0,
        marginBottom: 0,
        marginTop: 0,
        float: 'right'
    }
});

export default function YearCards() {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={advanced}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.text}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Masters Year
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/projects/year4/"><NavigateNext /></Link>
                    </CardActions>
                </CardActionArea>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={masters}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.text}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Year 3
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/projects/year3/"><NavigateNext /></Link>
                    </CardActions>
                </CardActionArea>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={inter}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.text}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Year 2
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/projects/year2/"><NavigateNext /></Link>
                    </CardActions>
                </CardActionArea>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={begin}
                        title="Year 1"
                    />
                    <CardContent className={classes.text}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Year 1
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/projects/year1"><NavigateNext /></Link>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Box>
    );
}