import React, { Component } from 'react';
import Forms from './components/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import './App.css';
import FirstForm from './components/layout/FirstForm';
import $ from 'jquery';
import Popper from 'popper.js';
import Referrals from './components/layout/Referrals'
import 'bootstrap/dist/js/bootstrap.bundle.min';

//THIS is a component!
class App extends Component {
  state = {
    forms: [
      {
        id: 1,
        title: 'Name of Caller: ',
        completed: false
      },
      {
        id: 2,
        title: 'Youths Name: ',
        completed: false
      },
      {
        id: 3,
        title: 'Youths Age: ',
        completed: true
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ forms: this.state.forms.map(form => {
      if(form.id === id) {
        form.completed = !form.completed
      }
      return form;
    })});
    }

    //delete form
    delForm = (id) => {
      this.setState({ forms: [...this.state.forms.filter(form => form.id !==id)]});
    }

  //render is a lifecyle method, only one that is required
  //returns JSX, an easy way to write js for output in browser
  render() {
    console.log(this.state.forms);
    return (
      <div className="App container">
      <Header />
      <FirstForm />
      <Referrals />
      </div>
    );
  }
}
//className instead of class like normal css
export default App;
