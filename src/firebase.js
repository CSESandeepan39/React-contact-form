import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyC8lNqXy7AuomhP1J09YIDnato-xhUv7BE",
  authDomain: "react-contact-form-c0e0a.firebaseapp.com",
  projectId: "react-contact-form-c0e0a",
  storageBucket: "react-contact-form-c0e0a.appspot.com",
  messagingSenderId: "816286056476",
  appId: "1:816286056476:web:46ce634cf8eb15ebe9dfd9"
});

var db = firebaseApp.firestore();

export { db };
