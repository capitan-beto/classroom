import React, { useEffect, useState } from 'react';
import {  collection, onSnapshot, query} from "firebase/firestore";
import { db } from "../../base";
import FileDisplayAdmin from '../FileDisplayAdmin';
import FileDisplay from '../FileDisplay';


const Folclore = ({ logState }) => {
  const [files, setFiles] = useState([]);

  function getData() {
    const q = query(collection(db, "folclore"));
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
      <FileDisplayAdmin files={files} subject={"folclore"} />
    :
      <FileDisplay files={files}/>
  )
}

export default Folclore