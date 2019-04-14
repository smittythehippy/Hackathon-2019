import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import Referrals from './components/layout/Referrals'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom';
import Home from './components/views/Home.js';
import DoNotShelter from './components/views/DoNotShelter.js';

//THIS is a component!
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_of_file: "", 
      staff_name: "",
      caller_name: "",
      caller_role: "",
      youth_name: "",
      youth_age: 0,
      youth_dob: "",
      caller_phone: "",
      youth_phone: "",
      guardian_phone: "",
      do_not_shelter_check: false,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  //render is a lifecyle method, only one that is required
  //returns JSX, an easy way to write js for output in browser
  render() {
    console.log(this.state.forms);
    return (
      <div className="container">
        <Header />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/referrals' component={Referrals} />
            <Route path='/DoNotShelter' component={DoNotShelter} />
          </div>
        </Router>
      </div>
    );
  }
}
//className instead of class like normal css
export default App;
