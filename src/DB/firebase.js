import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7fAQQnq-1H4ALcvghxF5HBHqPzSRZuuE",
  authDomain: "clone-7400b.firebaseapp.com",
  databaseURL: "https://clone-7400b.firebaseio.com",
  projectId: "clone-7400b",
  storageBucket: "clone-7400b.appspot.com",
  messagingSenderId: "224051424681",
  appId: "1:224051424681:web:95689769f15a35290f28b8",
  measurementId: "G-DWC2G2RTLQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
