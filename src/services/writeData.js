import { addDoc, collection } from "firebase/firestore";
import { db } from "./base"

export async function writeData(title, desc, subject, path) {
    try {
      const docRef = await addDoc(collection(db, subject), {
        title: title,
        desc: desc,
        subject: subject,
        path: path
      });
    } catch(error) {
      console.log(error)
    }
  }