import '../Assets/css/Home.css';
import Welcome from './Components/Welcome';
import YearCards from './Components/YearCards';
import { Box } from '@material-ui/core'
import React from 'react';

/*
Single Page Application - Dynamically render components into this view from './Components'
*/

class Home extends React.Component {
    render() {
        return (
            <Box className="Home">
                <YearCards />
                <Welcome />
            </Box>
        );
    }  
}

export default Home;