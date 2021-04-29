import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCyY14euOynSUuGBXdGIVjNQjGUOWFQ0JE",
    authDomain: "clone-ba5da.firebaseapp.com",
    projectId: "clone-ba5da",
    storageBucket: "clone-ba5da.appspot.com",
    messagingSenderId: "439179579712",
    appId: "1:439179579712:web:99fcb6ef7ca74d813f6aa5",
    measurementId: "G-CYDWN4NDDN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }