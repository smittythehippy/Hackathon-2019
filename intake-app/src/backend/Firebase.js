
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAgtuxsR8gHOqdB6zNLihV6IeGf1xq_glE",
    authDomain: "hackathon2019-hsu.firebaseapp.com",
    databaseURL: "https://hackathon2019-hsu.firebaseio.com",
    projectId: "hackathon2019-hsu",
    storageBucket: "hackathon2019-hsu.appspot.com",
    messagingSenderId: "559534616872"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

  export {db};