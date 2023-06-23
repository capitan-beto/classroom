import { doc, updateDoc } from "firebase/firestore";
import { db } from "./base"

export const updateItem = async (id, subject, input, inputDesc) => {
    const docRef = doc(db, subject, id);
    if (input) {
      await updateDoc(docRef, { title: input});
    } 
    if (inputDesc) {
      await updateDoc(docRef, { desc: inputDesc });
    }
}
