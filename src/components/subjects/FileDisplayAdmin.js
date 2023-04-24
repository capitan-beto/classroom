import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import EditBtn from '../EditBtn';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../base"

const FileDisplayAdmin = ({ files }) => {
  const [title, setTitle] = useState("");
  const [titleBtn, setTitleBtn] = useState("Edit");

  const Title = (item) => {
    if (title !== item.id) return <Modal.Title>{item.id}</Modal.Title>;
    else return <Form.Group> 
      <Form.Control type='text'/>
    </Form.Group> 
  }

  const handleTitle = (item) => {
    setTitle(item);
    if (titleBtn === "Edit") setTitleBtn("Save");
    else setTitleBtn("Edit");
    console.log(title === item)
  }

  // const updateFile = async (id, field, content) => {
  //   const itemRef = doc(db, "precusionlat", id);

  //   if (field === "title") {
  //     await updateDoc(itemRef, { title: content });
  //   } else if(field === "desc") {
  //     await updateDoc(itemRef, { desc: content });
  //   }
  // }

  return (
    files && <div>
      {files.map(({ title, desc, path, id }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={title}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Title id={title}/>
                <EditBtn handleTitle={handleTitle} item={title}/>
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