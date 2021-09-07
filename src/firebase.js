import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAJDJTiD-c-jRDmSmQTBSdTsfI4J0KQUQ0",

  authDomain: "clone-dash.firebaseapp.com",

  projectId: "clone-dash",

  storageBucket: "clone-dash.appspot.com",

  messagingSenderId: "399184298214",

  appId: "1:399184298214:web:26ab78948a3d4fd0507b27"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { db , auth, provider}


  // https://clone-dash.web.app/