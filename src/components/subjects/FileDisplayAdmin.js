import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import EditBtn from '../EditBtn';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../base"
import EditTitle from '../EditTitle';

const FileDisplayAdmin = ({ files }) => {
  const [itemOnEdit, setItemOnEdit] = useState("");
  const [input, setInput] = useState("");

  const updateEdit = () => {
    setInput("");
  }

  const startEdit = (item, state) => {
   if (!state) return setItemOnEdit(item);
   else return setItemOnEdit("");
  }

  return (
    files && <div>
      {files.map(({ title, desc, path, id }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={id}
          >
            <Modal.Dialog>
              <Modal.Header>
                <EditTitle itemOnEdit={itemOnEdit} title={title} setInput={setInput}/>
                <EditBtn item={title} startEdit={startEdit} updateEdit={updateEdit}/>
              </Modal.Header>
              <Modal.Body>
                <h2>{desc}</h2>
                <p>
                  <a href={path} target='_blank' rel='noreferrer'>
                    <Button>Link</Button>
                  </a>
                </p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      })}
    </div>
  )
}

export default FileDisplayAdmin