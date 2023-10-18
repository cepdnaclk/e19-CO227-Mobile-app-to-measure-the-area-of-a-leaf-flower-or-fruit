// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlwFQDD3QhwqaCcTHPxXEeUdw15_7v1-U",
//   authDomain: "greenapp-d4938.firebaseapp.com",
//   databaseURL: "https://greenapp-d4938-default-rtdb.firebaseio.com",
//   projectId: "greenapp-d4938",
//   storageBucket: "greenapp-d4938.appspot.com",
//   messagingSenderId: "105939413766",
//   appId: "1:105939413766:web:c9cfcf99271d364dd9cc87",
//   measurementId: "G-D28BWHGTCV",
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase };

import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlwFQDD3QhwqaCcTHPxXEeUdw15_7v1-U",
  authDomain: "greenapp-d4938.firebaseapp.com",
  projectId: "greenapp-d4938",
  storageBucket: "greenapp-d4938.appspot.com",
  messagingSenderId: "105939413766",
  appId: "1:105939413766:web:c9cfcf99271d364dd9cc87",
  measurementId: "G-D28BWHGTCV",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
