import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"
import { enableIndexedDbPersistence } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const  app = firebase.initializeApp (
  {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSGAING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_AP,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  }
)
export const auth =app.auth()
export const db = app.firestore()
db.settings({ timestampsInSnapshots:true,merge: true});
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log("Offline persistence failed because multiple tabs are open.");
  } else if (err.code === "unimplemented") {
    console.log("Offline persistence is not available in this browser.");
  }
});
export default app
