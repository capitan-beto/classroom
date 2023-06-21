import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const EditTitle = ({ itemOnEdit, title, setInput }) => {

  return (
    itemOnEdit === title ?
      <Form.Control type='text' onChange={e => setInput(e.target.value)} placeholder={title}/>
    :
      <Modal.Title>
          {title}
      </Modal.Title>
  )
}

export default EditTitle;