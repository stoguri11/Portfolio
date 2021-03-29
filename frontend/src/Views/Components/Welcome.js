import me from '../../Assets/img/me.jpeg';
import '../../Assets/css/Welcome.css';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Paper } from '@material-ui/core'

/*
Home page text and photo component
*/

function Welcome() {

    const useStyles = makeStyles({
        wrapper : {
            textAlign: "center"
        },
        textbox: {
            display: "inline-block",
            marginLeft: "5vw",
            marginRight: "5vw",
            maxWidth: "50vw",
            textAlign: "left"
        },
        text: {

        },
        paper: {
            display: "inline-block"
        },
        img: {
            maxWidth: "auto",
            height: "40vh",
            borderRadius: "5px",
            boxShadow: "none"
        }
    });

    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.textbox}>
                <Typography className={classes.text}>
                    I created this website to give potential future employers a more fun and interactive way to get to know me as well as show off some of my technical abilities. It catalogues my time at University and allows you to get a much better understanding of what
                    I learnt and what I am capable of. Please take the time to look through the projects I have developed as I am sure there will be something of interest to you.
                </Typography>
                <Typography className={classes.text}>
                    Ideally, I am looking for a Graduate Data Analyst, Graduate Software Developer or any tech related Graduate position. I am extremely passionate about all kinds of technologies as I am sure this website will help to display that. I am also very eager to
                    continue learning about different technologies and am always looking to improve myself. I believe getting into a graduate scheme will set me up perfectly to learn vast amounts about working in professional development environments
                    as well as give me the best position to launch a career from.
                </Typography>
                <Typography className={classes.text}>
                    If you have any questions and would like to get in touch feel free to contact me on any of the methods displayed at the bottom of the <a href='index.html' className="dropitem">About me</a> page.
                </Typography>
            </Box>
            <Paper className={classes.paper}>
                <img className={classes.img} src={me} alt="Sam Toguri"/>
            </Paper>
        </Box>
    );
}

export default Welcome;