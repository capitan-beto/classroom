import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export async function writeData(title, desc, subject, path) {

  try {
    await setDoc(doc(db, subject,  title), {
      title: title,
      desc: desc,
      subject: subject,
      path: path
    });
  } catch(error) {
    console.log(error)
  }
}