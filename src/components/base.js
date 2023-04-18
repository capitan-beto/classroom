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

const firestore = getFirestore();

const specialOfTheDay = doc(firestore, "dailySpecial/file");

async function writeData() {
  const docData = {
    desc: "A delicious vanilla latte",
    price: 3.99,
    mil: "Whole",
    vegan: false
  }
  try {
    setDoc(specialOfTheDay, docData, { merge: true });
    console.log("This value has been written");
  } catch(error) {
    console.log(error);
  }
  
}


writeData();