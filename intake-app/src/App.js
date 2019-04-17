import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import './App.css';
import FirstForm from './components/layout/FirstForm';
import $ from 'jquery';
import Popper from 'popper.js';
import Referrals from './components/layout/Referrals'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute, hashHistory, browserHistory} from 'react-router-dom';
import Home from './components/views/Home.js';
import DoNotShelter from './components/views/DoNotShelter.js';
import { StickyContainer, Sticky } from 'react-sticky';

//THIS is a component!
class App extends Component {
  state = {
    forms: [
      //todo: impelement states for each property
    ]
  }

  //render is a lifecyle method, only one that is required
  //returns JSX, an easy way to write js for output in browser
  render() {
    console.log(this.state.forms);
    return (
      <div>
      <Header />
        <Router>
          <div>
              <Route exact path='/'component={Home}/>
              {/* <Route path='/referrals' component={NewForm}/> */}
              <Route path='/DoNotShelter' component={DoNotShelter}/>
          </div>
        </Router>
      </div>
    );
  }
}
//className instead of class like normal css
export default App;
