import firebase from "firebase";


//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDEarzK3ScMU7pWi-W9TwBVMld_FOfyeIY",
  authDomain: "attenance-a0d93.firebaseapp.com",
  databaseURL: "https://attenance-a0d93-default-rtdb.firebaseio.com",
  projectId: "attenance-a0d93",
  storageBucket: "attenance-a0d93.appspot.com",
  messagingSenderId: "672291097133",
  appId: "1:672291097133:web:5ca2598c3af2296617c6a4"
};


if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }else { firebase.app(); }

  export default firebase.database()

  
 

  