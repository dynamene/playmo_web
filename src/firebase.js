import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: String(process.env.VUE_APP_FIREBASE_PROJECT_ID),
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
const db = firebase.firestore();

const firebaseAuth = firebase.auth();
const dbPlaylistsRef = db.collection("playlists");
const dbProfileRef = db.collection("profiles");

export default { firebaseAuth, dbPlaylistsRef, dbProfileRef };
