// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4TUdAqbsdLPI0W9n_lneXoFhpk46YAOE",
  authDomain: "independent-service-prov-781cb.firebaseapp.com",
  projectId: "independent-service-prov-781cb",
  storageBucket: "independent-service-prov-781cb.appspot.com",
  messagingSenderId: "376956291526",
  appId: "1:376956291526:web:6a574b0fdd7f2153020ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;