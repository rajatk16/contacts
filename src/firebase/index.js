import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAESStrQXK--FmEmbXl_gFR76vov3YSYfA",
  authDomain: "contacts-aa8ed.firebaseapp.com",
  databaseURL: "https://contacts-aa8ed.firebaseio.com",
  projectId: "contacts-aa8ed",
  storageBucket: "contacts-aa8ed.appspot.com",
  messagingSenderId: "877201208066",
  appId: "1:877201208066:web:a21ff489ef95b237"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage,
  firebase as default
}