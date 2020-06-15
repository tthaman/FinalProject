import * as firebase from "firebase/app";
import "firebase/firestore";

require('dotenv').config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
});

