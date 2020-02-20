

import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


firebase.initializeApp({
  apiKey: "AIzaSyCLA_dSSlsWUmaV6w7nJil8RiwdM2AD5uQ",
  authDomain: "laborum-scl011.firebaseapp.com",
  databaseURL: "https://laborum-scl011.firebaseio.com",
  projectId: "laborum-scl011",
  storageBucket: "laborum-scl011.appspot.com",
  messagingSenderId: "116883762326",
  appId: "1:116883762326:web:f4c9872febdee43da366b7",
  measurementId: "G-MT17B4HRXW"
});

let db = firebase.firestore();

export default db;