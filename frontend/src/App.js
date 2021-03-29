import './Assets/css/App.css';
import Home from './Views/Home';
import Project from './Views/Project';
import Topbar from './Views/Components/Topbar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core'

/*
Single Page Application - Dynamically render views into this page from './Views' using class state.
*/

class App extends React.Component {

  state = {
    view: "home",
    project: ""
  }


  render() {
    return (
      <Box className="App">
        <Topbar view={this.state.view}/>   
        <main className="App-content">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/projects/" component={Project} />
          </Switch>
        </main>
      </Box>
    );
  }
}

export default App;
