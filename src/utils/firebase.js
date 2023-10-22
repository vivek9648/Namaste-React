// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7gp1GTlBcz0lTjdz4hwJi7NQ5Ft4afE",
  authDomain: "foodorderingapp-edd32.firebaseapp.com",
  projectId: "foodorderingapp-edd32",
  storageBucket: "foodorderingapp-edd32.appspot.com",
  messagingSenderId: "696267872452",
  appId: "1:696267872452:web:e2c9fa6cfc79b261cf5191",
  measurementId: "G-YVRFRPN7PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);