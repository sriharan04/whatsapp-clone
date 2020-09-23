import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAp4A8d0CUAzLv4wUQLvVpbTkiKy82Okvo",
  authDomain: "whatssapp-clone-2b8e4.firebaseapp.com",
  databaseURL: "https://whatssapp-clone-2b8e4.firebaseio.com",
  projectId: "whatssapp-clone-2b8e4",
  storageBucket: "whatssapp-clone-2b8e4.appspot.com",
  messagingSenderId: "456750361213",
  appId: "1:456750361213:web:b6262ab8f46294bffd1f14",
  measurementId: "G-1P558968GS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
