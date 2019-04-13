import React, { Component } from 'react';
import Forms from './components/Forms';

import './App.css';

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
        completed: false
      },
    ]
  }

  //render is a lifecyle method, only one that is required
  //returns JSX, an easy way to write js for output in browser
  render() {
    console.log(this.state.forms);
    return (
      <div className="App">
      <Forms forms={this.state.forms} />
      </div>
    );
  }
}
//className instead of class like normal css
export default App;
