import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBF9Wk27o57nE4S70h4rETGf58c6d707IM",
    authDomain: "tinder-clone-bfc54.firebaseapp.com",
    databaseURL: "https://tinder-clone-bfc54.firebaseio.com",
    projectId: "tinder-clone-bfc54",
    storageBucket: "tinder-clone-bfc54.appspot.com",
    messagingSenderId: "611389889923",
    appId: "1:611389889923:web:cea1db84f95a121e80aab6",
    measurementId: "G-DVLWHSJNDS"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;