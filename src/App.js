import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleSheets/mystyle.css';
import './StyleSheets/Narrative.css';

import Index from './Programming/Index'
import About from './Programming/About';
import Contact from './Programming/Contact';
import Absolute_Unit from './Programming/Absolute_Unit';
// import Queen_of_Swords from './Programming/Queen_of_Swords';
import Programming_Resume from './Programming/Programming_Resume';
import Alice_ecliA from './Programming/Alice_ecliA';
import Cosmic from './Programming/Cosmic';
import Tamles from './Programming/Tamles';
import Card_Crossed_Lovers from './Programming/Card_Crossed_Lovers';

import Home from './Narrative/Home';
import AboutMe from './Narrative/AboutMe';
import ContactMe from './Narrative/ContactMe';
import AU from './Narrative/AU';
import LH from './Narrative/LH';
import Narrative_Resume from './Narrative/Narrative_Resume';
import AA from './Narrative/AA';
import CCL from './Narrative/CCL';
import DL from './Narrative/DL';
import Date from './Narrative/Date';
import OutofCTRL from './Narrative/OutofCTRL';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path="/portfolio" component={Index} exact={true} />

            {/* Narrative */}
            <Route path="/home" component={Home} exact={true} />
            <Route path="/about-me" component={AboutMe} exact={true} />
            <Route path="/contact-me" component={ContactMe} exact={true} />
            <Route path="/narrative-resume" component={Narrative_Resume} exact={true} />
            <Route path="/au" component={AU} exact={true} />
            <Route path="/lh" component={LH} exact={true} />
            <Route path="/aa" component={AA} exact={true} />
            <Route path="/ccl" component={CCL} exact={true} />
            <Route path="/dl" component={DL} exact={true} />
            <Route path="/date-n-dash" component={Date} exact={true} />
            <Route path="/out-of-ctrl" component={OutofCTRL} exact={true} />

            {/* Programming */}
            <Route path="/index" component={Index} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />
            <Route path="/programming-resume" component={Programming_Resume} exact={true} />
            <Route path="/absolute-unit" component={Absolute_Unit} exact={true} />
            {/* <Route path="/queen-of-swords" component={Queen_of_Swords} exact={true} /> */}
            <Route path="/alice-eclia" component={Alice_ecliA} exact={true} />
            <Route path="/tamles-con-familia" component={Tamles} exact={true} />
            <Route path="/cosmic-delights" component={Cosmic} exact={true} />
            <Route path="/card-crossed-lovers" component={Card_Crossed_Lovers} exact={true} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;