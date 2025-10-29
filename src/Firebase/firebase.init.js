// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsto8yvK8z70H2-4ix9e1uc03jzEg4hn8",
  authDomain: "the-kb-show.firebaseapp.com",
  projectId: "the-kb-show",
  storageBucket: "the-kb-show.firebasestorage.app",
  messagingSenderId: "1048052999929",
  appId: "1:1048052999929:web:33cc9269f2ffa261de6428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth