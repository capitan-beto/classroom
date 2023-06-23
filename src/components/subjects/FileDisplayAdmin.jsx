import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditBtn from '../../assets/EditBtn';
import EditTitle from '../../assets/EditTitle';
import EditDesc from '../../assets/EditDesc';
import LoadScreen from '../../assets/LoadScreen';
import { updateItem } from '../../services/updateItem';
import { deleteItem } from '../../services/deleteItem';

const FileDisplayAdmin = ({ files, subject }) => {
  const [itemOnEdit, setItemOnEdit] = useState("");
  const [input, setInput] = useState(null);
  const [inputDesc, setInputDesc] = useState(null);

  const handleEdit = async (id) => {
    await updateItem(id, subject, input, inputDesc);
    setInput(null);
    setInputDesc(null);
  }
  
  const startEdit = (item, state) => {
   if (!state) return setItemOnEdit(item);
   else return setItemOnEdit("");
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
                <EditBtn item={title} startEdit={startEdit} handleEdit={handleEdit} id={id}/>
                <Button onClick={() => deleteItem(subject, id)}>Delete</Button>
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