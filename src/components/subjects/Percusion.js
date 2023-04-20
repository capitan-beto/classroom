import React, { useEffect, useState } from 'react';
import { getDocs, collection} from "firebase/firestore/lite";
import { db } from "../base";
import FileDisplayAdmin from './FileDisplayAdmin';
import FileDisplay from './FileDisplay';

const Percusion = ({ logState }) => {

    // const GetPercusionData = async () => {
    //     const querySnap = await getDocs(collection(db, "percusionlat")) ;
    //     return querySnap.forEach((doc) => {
    //         const item = doc.data();
    //         console.log(item);
    //     })
    // }

    // GetPercusionData();

  return (
    logState ? 
    <FileDisplayAdmin/> :
    <FileDisplay/>
  )
}

export default Percusion