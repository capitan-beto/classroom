import { useEffect, useState } from "react";
import {  collection, onSnapshot, query} from "firebase/firestore";
import { db } from "../services/base";


export const useFetchItems = (subject) => {
    const [files, setFiles] = useState();
    
    function getData(subject) {
        const q = query(collection(db, subject));
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
        getData(subject);
        return () => ignore = true;
      }, []
    );

    return { files };
}