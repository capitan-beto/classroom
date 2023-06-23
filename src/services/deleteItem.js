import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "./base";

export const deleteItem = async (subject, id) => {
    await deleteDoc(doc(db, subject, id));
  }