import { initializeApp } from "firebase/app"
// import {
//     getAuth,
//     connectAuthEmulator,
//     signInWithEmailAndPassword
// } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export default app;

// const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9009");

// const loginEmailPassword = async () => {
//     const loginEmail = txtEmail.value;
//     const loginPassword = txtPassword.value;

//     const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//     console.log(userCredentials.user)
// }

// btnLogin.addEventListener("click", loginEmailPassword)