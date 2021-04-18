import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCFJB-_e2EXTjQQgKXBaVLk8InNGkR4tJo",
  authDomain: "whatsapp-9a53d.firebaseapp.com",
  projectId: "whatsapp-9a53d",
  storageBucket: "whatsapp-9a53d.appspot.com",
  messagingSenderId: "400592021326",
  appId: "1:400592021326:web:65f2bfd96ff16d463a601f"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
