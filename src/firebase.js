// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCXEeY-Ysc16uTaF-SBxxXDhulqaf99kvY",
    authDomain: "slack-clone-653e1.firebaseapp.com",
    projectId: "slack-clone-653e1",
    storageBucket: "slack-clone-653e1.appspot.com",
    messagingSenderId: "897079318122",
    appId: "1:897079318122:web:bdbe0e4cbcd5d5f8e4dc13",
    measurementId: "G-7LZN7G6MWJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;