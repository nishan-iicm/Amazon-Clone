import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2bMJ9CJHRTNF2n6HQTq31zG1J1JTDUG4",
  authDomain: "fir-5d304.firebaseapp.com",
  projectId: "fir-5d304",
  storageBucket: "fir-5d304.appspot.com",
  messagingSenderId: "812696398293",
  appId: "1:812696398293:web:228a88b1aadab78caff55c",
  measurementId: "G-NHW5W7EB8L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db,auth };