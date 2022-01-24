// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP-A4k6F5EsqRZruNHCGr5AWSsD_d2iqg",
  authDomain: "todo-app-6b4f6.firebaseapp.com",
  databaseURL: "https://todo-app-6b4f6-default-rtdb.firebaseio.com",
  projectId: "todo-app-6b4f6",
  storageBucket: "todo-app-6b4f6.appspot.com",
  messagingSenderId: "883726350487",
  appId: "1:883726350487:web:54567e73be3ed25b5711d2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//firebase.initializeApp(firebaseConfig);

//export default firebase.database();
export default database;
