import firebase from "firebase";
require('@firebase/firestore')



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBnkKoKs8rxk3XwY9Z97RdtTdwXvZ9fRnY",
    authDomain: "food-santa-b7f59.firebaseapp.com",
    projectId: "food-santa-b7f59",
    storageBucket: "food-santa-b7f59.appspot.com",
    messagingSenderId: "1037911891116",
    appId: "1:1037911891116:web:d5e0e6e1d14b40dfa21309"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();