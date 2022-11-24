import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: "AIzaSyDb3xhgFR2BCz5eu3xtV8K6GXMGsUBoQZA",
    // authDomain: "motor-221b3.firebaseapp.com",
    // projectId: "motor-221b3",
    // storageBucket: "motor-221b3.appspot.com",
    // messagingSenderId: "823148425945",
    // appId: "1:823148425945:web:6f0034235772e5c37844c8",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app