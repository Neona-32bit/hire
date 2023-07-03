// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvz9pzlpVXhd8PLfVR1E8VGZ6qT-ARvY",
  authDomain: "react-register-62121.firebaseapp.com",
  projectId: "react-register-62121",
  storageBucket: "react-register-62121.appspot.com",
  messagingSenderId: "879156524423",
  appId: "1:879156524423:web:59b70885e147f7aac14f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth, app}