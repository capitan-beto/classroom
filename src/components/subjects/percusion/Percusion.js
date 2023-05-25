import React, { useEffect, useState } from 'react';
import {  collection, onSnapshot, query} from "firebase/firestore";
import { db } from "../../services/base";
import FileDisplayAdmin from '../FileDisplayAdmin';
import FileDisplay from '../FileDisplay';


const Percusion = ({ logState }) => {
  const [files, setFiles] = useState();

  function getData() {
    const q = query(collection(db, "percusionlat"));
    const unsubs = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        item.id = doc.id;
        data.push(item);
      })
      setFiles(data);
    })
  }

  useEffect(() => {
    let ignore = false;
    getData();
    return () => ignore = true;
  }, []);

  return (
    logState ?
      <FileDisplayAdmin files={files} subject={"percusionlat"} />
    :
      <FileDisplay files={files}/>
  )
}

export default Percusion

