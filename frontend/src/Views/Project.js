import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core'
//Components 
import Year1 from './Components/UnitCards/Year1';
import Year2 from './Components/UnitCards/Year2';
import Year3 from './Components/UnitCards/Year3';
import Year4 from './Components/UnitCards/Year4';


/*
Single Page Application - Dynamically render components into this view from './Components'
*/


function Home() {
  return (
    <Box className="Home">
      <Switch>
        <Route path='/projects/year1/' component={Year1} exact />
        <Route path='/projects/year2/' component={Year2}/>
        <Route path='/projects/year3/' component={Year3}/>
        <Route path='/projects/year4/' component={Year4} />
      </Switch>
    </Box>
  );
}

export default Home;
