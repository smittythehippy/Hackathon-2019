import React from 'react';
import ReactDOM from 'react-dom';
//This parent app component wraps around everything
import App from './App';

//Possibly use the below for offline use
//import * as serviceWorker from './serviceWorker';

//Grabs the root div and inserts the app component
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


//serviceWorker.unregister();
