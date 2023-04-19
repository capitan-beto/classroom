import React, { useState } from 'react';
import { getDocs, collection} from "firebase/firestore/lite";
import { db } from "../base";

const Percusion = () => {
    const [data, setData] = useState("");

    const GetPercusionData = async () => {
        const querySnap = await getDocs(collection(db, "percusionlat")) ;
        return querySnap.forEach((doc) => {
            const item = doc.data();
            setData(curr => {
                return {...curr, item};
            })
        })
    }

    GetPercusionData();

    console.log(data);

  return (
    <div></div>
  )
}

export default Percusion