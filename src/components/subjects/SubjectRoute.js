import React, { useEffect, useState } from 'react';
import {  collection, onSnapshot, query} from "firebase/firestore";
import { db } from "../../services/base";
import FileDisplayAdmin from '../subjects/FileDisplayAdmin';
import FileDisplay from '../subjects/FileDisplay';
import { useFetchItems } from '../../hooks/useFetchItems';


const SubjectRoute = ({ logState, subject }) => {
  const { files } = useFetchItems(subject);
  // const [files, setFiles] = useState();

  // function getData() {
  //   const q = query(collection(db, subject));
  //   const unsubs = onSnapshot(q, (querySnapshot) => {
  //     const data = [];
  //     querySnapshot.forEach((doc) => {
  //       const item = doc.data();
  //       item.id = doc.id;
  //       data.push(item);
  //     })
  //     setFiles(data);
  //   })
  // }

  // useEffect(() => {
  //   let ignore = false;
  //   getData();
  //   return () => ignore = true;
  // }, []);

  return (
    logState ?
      <FileDisplayAdmin files={files} subject={subject} />
    :
      <FileDisplay files={files}/>
  )
}

export default SubjectRoute;