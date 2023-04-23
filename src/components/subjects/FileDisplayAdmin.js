import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import EditBtn from '../EditBtn';

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

  return (
    <div>
      {files.map(({ title, desc, path }) => {
        return <div
            className='modal show'
            style={{ display: "block", position: "initial" }}
            key={title}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Title id={title}/>
                <EditBtn state={titleBtn} item={title}/>
                {/* <Button variant="outline-secondary" onClick={() => handleTitle(title)}>
                    {titleBtn}
                </Button> */}
              </Modal.Header>
              <Modal.Body>
                <h2>{desc}</h2>
                <p>
                  <a href={path} target='_blank'>
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