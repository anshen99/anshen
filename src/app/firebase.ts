// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-h2gIl8pL_Rb_ibHtsoKYFXIxai4P1yo",
  authDomain: "ecommerce2023-fd8b2.firebaseapp.com",
  projectId: "ecommerce2023-fd8b2",
  storageBucket: "ecommerce2023-fd8b2.appspot.com",
  messagingSenderId: "43812281023",
  appId: "1:43812281023:web:3def6e781e02cf1db1840a",
  measurementId: "G-470L8GGDCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firebase auth and get reference to the services
export const auth=getAuth(app);