import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCHWijd4tIxOXCfMDIi2KCJtOtK9YWGrYw",
    authDomain: "pedidofacil-8850b.firebaseapp.com",
    databaseURL: "https://pedidofacil-8850b.firebaseio.com",
    projectId: "pedidofacil-8850b",
    storageBucket: "",
    messagingSenderId: "237519345693",
    appId: "1:237519345693:web:32183b3aa7dc024a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;