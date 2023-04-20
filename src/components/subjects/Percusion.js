import React, { useState } from 'react';
import { getDocs, collection} from "firebase/firestore/lite";
import { db } from "../base";
import FileDisplayAdmin from './FileDisplayAdmin';
import FileDisplay from './FileDisplay';

const Percusion = () => {
  const [auth, authState] = useState(true);
    // const [data, setData] = useState("");

    // const GetPercusionData = async () => {
    //     const querySnap = await getDocs(collection(db, "percusionlat")) ;
    //     return querySnap.forEach((doc) => {
    //         const item = doc.data();
    //         console.log(item);
    //     })
    // }

    // GetPercusionData();

  return (
    auth ? 
    <FileDisplayAdmin/> :
    <FileDisplay/>
  )
}

export default Percusion