import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDNUdCY_TzYOczEsnlyQlgQTB9yAjCAuiI",
  authDomain: "conociendo-27969.firebaseapp.com",
  databaseURL: "https://conociendo-27969.firebaseio.com",
  projectId: "conociendo-27969",
});

let db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });
export default db;
