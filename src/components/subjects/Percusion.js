import React, { useEffect, useState } from 'react';
import { getDocs, collection} from "firebase/firestore";
import { db } from "../base";
import FileDisplayAdmin from './FileDisplayAdmin';
import FileDisplay from './FileDisplay';


const Percusion = ({ logState }) => {
  const [files, setFiles] = useState([]);

  const GetPercusionData = async () => {
    let data = [];
    const querySnap = await getDocs(collection(db, "percusionlat")) ;
    querySnap.forEach(doc => {
      const item = doc.data();
      item.id = doc.id
      data.push(item)
    });
    console.log(data);
    return data;
  } 

  useEffect(() => {
    let ignore = false;
    setFiles(null)
    GetPercusionData().then(res => {
      if(!ignore){
        setFiles(res);
      }
    });
    
    return () => ignore = true;
  }, []);

  return (
    logState ? <FileDisplayAdmin files={files}/> :
     <FileDisplay files={files}/>
  )
}

export default Percusion

