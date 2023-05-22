import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditBtn from '../EditBtn';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../base"
import EditTitle from '../EditTitle';
import EditDesc from '../EditDesc';
import LoadScreen from '../LoadScreen';

const FileDisplayAdmin = ({ files, subject }) => {
  const [itemOnEdit, setItemOnEdit] = useState("");
  const [input, setInput] = useState(null);
  const [inputDesc, setInputDesc] = useState(null);
  

  const updateEdit = async (id) => {
    const docRef = doc(db, subject, id);
    if (input) {
      await updateDoc(docRef, { title: input});
    } 
    if (inputDesc) {
      await updateDoc(docRef, { desc: inputDesc });
    }
    setInput(null);
    setInputDesc(null);
  }
  
  const startEdit = (item, state) => {
   if (!state) return setItemOnEdit(item);
   else return setItemOnEdit("");
  }

  const deleteItem = async (id, subject) => {
    await deleteDoc(doc(db, subject, id));
  }


  return (
    files ?
    <div>
      {files.map(({ title, desc, path, id }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={id}
          >
            <Modal.Dialog>
              <Modal.Header
                style={{display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: ".5rem" }}
              >
                <EditTitle itemOnEdit={itemOnEdit} title={title} setInput={setInput}/>
                <EditBtn item={title} startEdit={startEdit} updateEdit={updateEdit} id={id}/>
                <Button onClick={() => deleteItem(id, subject)}>Delete</Button>
              </Modal.Header>
              <Modal.Body>
                <EditDesc itemOnEdit={itemOnEdit} title={title} setInputDesc={setInputDesc} desc={desc}/>
                <p>
                  <a href={path} target='_blank' rel='noreferrer'>
                    <Button className='my-2'>Abrír</Button>
                  </a>
                </p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      })}
    </div>
     : 
    <div style={{ 
      height: "100%",
      display: "grid",
      placeContent:"center"}}
    >
     <LoadScreen/>
    </div>
  )
}

export default FileDisplayAdmin