
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CurRov from './CurRov';
import SprRov from './SprRov';
import OppRov from './OppRov';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc';

function App() {


  return (

    <Router>
     <div className='App'>
        <Navbar />
      <div className="content">
        <Switch>

        <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/CurRov">
            <CurRov />
          </Route>

          <Route exact path="/SprRov">
            <SprRov />
          </Route>

          <Route exact path="/OppRov">
            <OppRov />
          </Route>

        </Switch>
      </div>
      </div>
     
    </Router>
//^ Code above incomplete___watching tut on React Router^
   )
}

export default App;
