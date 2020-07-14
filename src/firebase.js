import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
<<<<<<< HEAD
  apiKey: "AIzaSyDNUdCY_TzYOczEsnlyQlgQTB9yAjCAuiI",
  authDomain: "conociendo-27969.firebaseapp.com",
  databaseURL: "https://conociendo-27969.firebaseio.com",
  projectId: "conociendo-27969",
=======
  apiKey: "AIzaSyD6ed6ut9qqabRCCLAWNv9vkA-y-PMMDts",
  authDomain: "project-burguer-queen.firebaseapp.com",
  projectId: "project-burguer-queen",
>>>>>>> c73fb4c7a4e7cb4cd86447480bb59bec8ef8f561
});

let db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });
export default db;
